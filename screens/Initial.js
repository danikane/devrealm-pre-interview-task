import React from 'react';
import { connect } from 'react-redux';

// Stateless Functional Component
function Initial(props) {
  props.navigation.replace(props.pin ? "Login" : "NewPIN");
  return null;
}

// OR

// Classic Component
// class Initial extends React.Component {
//   constructor(props) {
//     super(props);
//     props.navigation.replace(props.pin ? "Login" : "NewPIN");
//   }

//   render() {
//     return null;
//   }
// }

const mapStateToProps = ({ pin }) => {
  return {
    pin
  };
};

export default connect(mapStateToProps)(Initial);
