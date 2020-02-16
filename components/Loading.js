import React, { PureComponent } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { myContainers } from '../styles';

// PureComponent - can be replaced by Functional Component
export default class Loading extends PureComponent {
  render() {
    return (
      <View style={myContainers.mainCentered}>
        <ActivityIndicator size="large" color="#0074D9"></ActivityIndicator>
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Please wait, reading storage ...
        </Text>
      </View>
    );
  }
}
