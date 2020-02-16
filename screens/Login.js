import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-tiny-toast';
import { connect } from 'react-redux';

import { myContainers, myInputs, myText } from '../styles';

// Hooks API example 
const Login = props => {
  const [pin, setPin] = useState(null);
  const [pinVisiblity, setPinVisibility] = useState(true);

  const _validatePin = () => {
    if (pin == props.pin) {
      // alert("OK go");
      Toast.showSuccess("Correct PIN!", {
        position: Toast.position.TOP
      });
      props.navigation.replace("Home");
    } else {
      Toast.show("Wrong PIN!", {
        position: Toast.position.TOP
      });
    }
  };

  _togglePinVisibility = () => {
    setPinVisibility(!pinVisiblity);
  };

  return (
    <View style={myContainers.mainCentered}>
      <Text style={myText.myBoldText}>Enter your PIN to continue</Text>
      <View style={[myContainers.textInputView]}>
        <TextInput
          style={myInputs.myTextInput}
          placeholder="PIN"
          keyboardType="numeric"
          autoCorrect={false}
          returnKeyType="go"
          secureTextEntry={pinVisiblity}
          onChangeText={val => setPin(val.replace(/[^0-9]/g, ""))}
          value={pin}
        />
        <TouchableOpacity onPress={_togglePinVisibility}>
          <Ionicons
            name={pinVisiblity ? "ios-eye-off" : "ios-eye"}
            size={28}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>

      <ActionButton title="SUBMIT" disabled={!pin} onPress={_validatePin} />
    </View>
  );
};

const mapStateToProps = ({ pin }) => {
  return {
    pin
  };
};

export default connect(mapStateToProps)(Login);
