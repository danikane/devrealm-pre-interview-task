import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export const myContainers = StyleSheet.create({
  mainCentered: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  textInputView: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: "grey"
  },
  flexCentered: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export const myShadows = StyleSheet.create({
  shadow1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  shadow5: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export const myText = StyleSheet.create({
  myRegularText: {
    color: "grey",
    fontSize: 18,
    fontWeight: "normal"
  },
  myBoldText: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export const myInputs = StyleSheet.create({
  myTextInput: {
    color: "black",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  isValid: {
    borderColor: "green"
  },
  isInvalid: {
    borderColor: "red"
  }
});
