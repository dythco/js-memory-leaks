import React, { Component } from 'react';

class SubscriptionsLeaky extends Component {
  constructor() {
    super()
    this.state = {count: 0}
  }

  componentWillMount() {
    setInterval(() => {this.setState({count: this.state.count + 1})}, 10)
  }

  render() {
    return (<div>Tick ({this.state.count})</div>);
  }
}

export default SubscriptionsLeaky;
