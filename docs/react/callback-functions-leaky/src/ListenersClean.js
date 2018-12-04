import React, { Component } from 'react';

class ListenersClean extends Component {
  constructor() {
    super()
    this.state = {count: 0}
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({count: this.state.count + 1})
  }

  componentDidMount() {
    window.addEventListener('click', this.onClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClick)
  }

  render() {
    return (<div>Tick ({this.state.count})</div>);
  }
}

export default ListenersClean;
