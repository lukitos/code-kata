import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fishAction from './actions/fishAction';
// import Main from './components/Main';
import Species from './components/Species';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fishAction.getFish();
  }

  render() {
    return (
      <div>
        <Species stype="flathead" stitle="Flathead Catfish" />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    fishAction: bindActionCreators(fishAction, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);
