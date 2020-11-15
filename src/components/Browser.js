import React, { Component } from 'react';
import { object } from 'prop-types';
import { DrizzleProvider } from 'drizzle-react';
import Web3 from 'web3';
import KittyCoreABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';

class Browser extends Component {
  
  componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider);

    // Initialize the contract instance

    const kittyContract = new web3.eth.Contract(
      KittyCoreABI, // import the contracts's ABI and use it here
      CONTRACT_ADDRESS,
    );

    // Add the contract to the drizzle store

    this.context.drizzle.addContract({
      contractName: CONTRACT_NAME,
      web3Contract: kittyContract,
    });
  }

  render() {
    
    // const drizzleContext = {
    //   drizzle,       // this is the drizzle instance (use this to call `cacheCall` and `cacheSend`)
    //   drizzleState,  // this is the entire Drizzle state, it will always be up-to-date
    //   initialized    // this boolean value will indicate when Drizzle is ready
    // }

    return (
            
      <div className="browser">
        <h1>
          Kitty Browser
        </h1>

        {/* <form>
          <label>Kitty ID:</label><br></br>
          <input type = 'text' id='kittyID' name='id'></input>
          <input type = 'submit'></input>
        </form>
        <br></br>       
        Genes:
        <br></br><br></br>
        Generation:
        <br></br><br></br>
        Birth Time:
        <br></br><br></br> */}

        {/* Input to type in the kitty ID here */}

        {/* Display Kitty info here */}
        
      </div>

    );
    
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
