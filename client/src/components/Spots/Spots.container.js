import React, { Component } from "react";
import { connect } from "react-redux";

import * as spotActions from "../../store/spot/spot.actions.js";



class SpotsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(spotActions.fetch());
  }

  render() {
    return <div>Hey !</div>;
  }
}

const mapStateToProps = state => ({
  spots: state.spots
});

export default connect(mapStateToProps)(SpotsContainer);
