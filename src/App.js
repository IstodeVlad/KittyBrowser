import React, { Component } from 'react';
import { DrizzleProvider } from 'drizzle-react'
import Loading from './containers/Loading';
import Browser from './components/Browser';
import './App.css';
import { generateStore } from '@drizzle/store';
import { Drizzle } from 'drizzle';
import KittyCoreABI from './contracts/KittyCoreABI.json';

class App extends Component {
  render() {
    const drizzleOptions = {
      contracts: [KittyCoreABI]
    };
    const drizzleStore = generateStore(drizzleOptions);
    const drizzle = new Drizzle(drizzleOptions, drizzleStore);

    return (
      <DrizzleProvider options={drizzleOptions}>
        <Loading>
          <Browser />
        </Loading>
      </DrizzleProvider>
    );
  }
}

export default App;
