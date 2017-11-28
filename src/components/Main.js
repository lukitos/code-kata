import React from 'react';
import { connect } from 'react-redux';

const Main = (props) => {
  console.log('in Main >>> props', props);

  return (
    <div>Main</div>
  );

}

function mapStateToProps(state, props) {
  return {
    fish: state.fish
  }
}

export default connect(mapStateToProps, null)(Main);
