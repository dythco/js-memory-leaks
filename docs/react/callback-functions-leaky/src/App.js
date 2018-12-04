import React, { Component } from 'react';
import './App.css';

import SubscriptionsLeaky from './SubscriptionsLeaky';
import SubscriptionsClean from './SubscriptionsClean';

import ListenersLeaky from './ListenersLeaky';
import ListenersClean from './ListenersClean';

class App extends Component {
  constructor() {
    super()
    this.state = {item: 'tick', count: 0}
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  componentWillUnmount() {
    this.stop()
  }

  start() {
    console.log('Starting')
    this.interval = setInterval(() => {
      if (this.state.count >= 6000) {
        this.stop()
      } else {
        this.setState({item: this.state.item === 'tick' ? 'tock' : 'tick', count: this.state.count + 1})  
      }
    }, 50)
  }

  stop() {
    console.log('Stopping')
    clearInterval(this.interval)
  }
  
  render() {
    const state = this.state

    return (
      <div>
        <div className='app-test'>
          {state.item === 'tick' && <ListenersLeaky />}
          {state.item === 'tock' && <div>Tock</div>}
        </div>
        <div className='app-counter'>Count: {state.count}</div>
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
