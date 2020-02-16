import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { myContainers } from '../styles';

const QUOTES_API = "https://api.quotable.io/random";

class HomeScreen extends Component {
  state = { quote: null, error: null, fetching: false };

  async componentDidMount() {
    this._fetchQuote();
  }

  _fetchQuote = async () => {
    let quote, error;
    try {
      this.setState({ fetching: true, quote: null, error: null });
      const response = await fetch(QUOTES_API);
      data = await response.json();
      if (data.statusCode && data.statusCode != 200) throw data.statusMessage;
      quote = data;
    } catch (err) {
      console.log("error: \n", err);
      error = err;
      quote = null;
    } finally {
      this.setState({ fetching: false, quote, error });
    }
  };

  _changePin = () => {
    this.props.navigation.navigate("NewPIN", { title: "Change your PIN" });
  };

  render() {
    const { pin } = this.props;
    const { fetching, quote, error } = this.state;

    return (
      <View style={myContainers.mainCentered}>
        {fetching ? <ActivityIndicator size="large" color="#0074D9" /> : null}
        {error ? (
          <Text
            style={{
              color: "red",
              fontSize: 20,
              textAlign: "center",
              padding: 10
            }}
          >
            Error: {error}
          </Text>
        ) : null}
        {quote ? (
          <View>
            <Text
              style={{
                color: "grey",
                fontSize: 24,
                fontStyle: "italic",
                textAlign: "center",
                padding: 10
              }}
            >
              {`"${quote.content}"`}
            </Text>
            <Text style={{ fontSize: 16, textAlign: "right", padding: 10 }}>
              – {quote.author}
            </Text>
          </View>
        ) : null}
        <View
          style={[
            myContainers.flexCentered,
            {
              marginTop: "20%"
            }
          ]}
        >
          <Text>Your PIN is: {pin}</Text>
          <TouchableOpacity
            style={[myContainers.flexCentered, { height: 40 }]}
            onPress={this._changePin}
          >
            <Text
              style={{
                color: "#0074D9",
                fontSize: 18,
                borderBottomColor: "#0074D9",
                borderBottomWidth: 1.5
              }}
            >
              Change your PIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ pin }) => {
  return {
    pin
  };
};

export default connect(mapStateToProps)(HomeScreen);
