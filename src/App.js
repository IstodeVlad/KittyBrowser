import React, { Component } from 'react';
import { DrizzleProvider } from 'drizzle-react'
import Loading from './containers/Loading';
import Browser from './components/Browser';
import './App.css';
import { Drizzle, generateStore } from 'drizzle';
import KittyCoreABI from './contracts/KittyCoreABI.json';

class App extends Component {
  render() {
    const DrizzleOptions = {
      contracts: [KittyCoreABI]
    };
    
    const drizzleStore = generateStore(DrizzleOptions);
    const drizzle = new Drizzle(DrizzleOptions, drizzleStore);

    return (
      <DrizzleProvider drizzle={drizzle}>
        <Loading>
          <Browser />
        </Loading>
      </DrizzleProvider>
    );
  }
}

export default App;
