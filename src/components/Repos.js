import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory, Link, IndexLink } from 'react-router';

export default class Repos extends Component{
  onClick(e) {
    browserHistory.push('/')
  }

  render() {
    return <div>
      Hello Repos!
      <p>{this.props.params.name}</p>
      <button onClick={this.onClick}> "Back" </button>
    </div>

  }
}
