import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import ActionButton from '../components/ActionButton';
import { setPin } from '../store/actions';
import { myContainers, myInputs, myText } from '../styles';

class NewPIN extends Component {
  state = {
    pin: null,
    confirmPin: null,
    pinVisibility: true,
    confirmPinVisibility: true
  };

  _onSavePress = () => {
    const { pin } = this.state;
    this.props.onSetPinPress(pin);
    this.props.navigation.replace("Home");
  };

  _togglePinVisibility = () => {
    this.setState({ pinVisibility: !this.state.pinVisibility });
  };

  _toggleConfirmPinVisibility = () => {
    this.setState({ confirmPinVisibility: !this.state.confirmPinVisibility });
  };

  render() {
    const { pin, confirmPin, pinVisibility, confirmPinVisibility } = this.state;

    const isPinValid = () => {
      return pin && pin.toString().length > 3;
    };

    const isConfirmPinValid = () => {
      return confirmPin && confirmPin == pin;
    };

    return (
      // Better use some Keyboard Aware ScrollView implementation
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        style={myContainers.mainCentered}
        // contentContainerStyle={myContainers.mainCentered}
      >
        <Text style={myText.myBoldText}>
          {this.props.route.params?.title ?? "You need to set a PIN"}
        </Text>
        {/* PIN */}
        <View
          style={[
            myContainers.textInputView,
            isPinValid() ? myInputs.isValid : myInputs.isInvalid
          ]}
        >
          <TextInput
            style={myInputs.myTextInput}
            placeholder="Enter PIN"
            keyboardType="numeric"
            autoCorrect={false}
            returnKeyType="next"
            secureTextEntry={pinVisibility}
            onChangeText={val =>
              this.setState({ pin: val.replace(/[^0-9]/g, "") })
            }
            value={pin}
          />
          <TouchableOpacity onPress={this._togglePinVisibility}>
            <Ionicons
              name={pinVisibility ? "ios-eye-off" : "ios-eye"}
              size={28}
              style={{ textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>
        {!isPinValid() ? (
          <Text style={{ alignSelf: "flex-start", marginLeft: 20 }}>
            Minimum 4 characters
          </Text>
        ) : null}

        {/* Confirm PIN */}
        <View
          style={[
            myContainers.textInputView,
            isConfirmPinValid() ? myInputs.isValid : myInputs.isInvalid
          ]}
        >
          <TextInput
            style={myInputs.myTextInput}
            placeholder="Confirm PIN"
            keyboardType="numeric"
            autoCorrect={false}
            returnKeyType="go"
            secureTextEntry={confirmPinVisibility}
            onChangeText={val =>
              this.setState({ confirmPin: val.replace(/[^0-9]/g, "") })
            }
            value={confirmPin}
          />
          <TouchableOpacity onPress={this._toggleConfirmPinVisibility}>
            <Ionicons
              name={confirmPinVisibility ? "ios-eye-off" : "ios-eye"}
              size={28}
              style={{ textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>
        {!isConfirmPinValid() ? (
          <Text style={{ alignSelf: "flex-start", marginLeft: 20 }}>
            PIN doesn't match
          </Text>
        ) : null}

        {/* Form Action */}
        <ActionButton
          title="SAVE"
          disabled={!(pin && pin.toString().length > 3 && pin == confirmPin)}
          onPress={this._onSavePress}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ pin }) => {
  return {
    pin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetPinPress: pin => {
      dispatch(setPin(pin));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPIN);
