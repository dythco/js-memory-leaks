import React, { Component } from 'react';

class SubscriptionsClean extends Component {
  constructor() {
    super()
    this.state = {count: 0}
  }

  componentWillMount() {
    setInterval(() => {this.setState({count: this.state.count + 1})}, 10)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (<div>Tick ({this.state.count})</div>);
  }
}

export default SubscriptionsClean;
