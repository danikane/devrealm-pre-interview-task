import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { myContainers, myShadows } from '../styles';

export default ActionButton = props => {
  return (
    <View
      style={[
        myContainers.flexCentered,
        {
          width: "100%",
          marginTop: 30
        }
      ]}
    >
      <TouchableOpacity
        style={[
          {
            backgroundColor: props.disabled ? "lightgrey" : "#0074D9",
            width: "90%",
            borderRadius: 50,
            padding: 15
          },
          myShadows.shadow5
        ]}
        activeOpacity={props.disabled ? 1 : 0.2}
        onPress={props.onPress}
        disabled={props.disabled}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
