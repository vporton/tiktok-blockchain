import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import logo from './assets/logo.svg';
import nearlogo from './assets/gray_near_logo.svg';
import near from './assets/near.svg';
import './App.css';
import mine from './mining';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
    this.signedInFlow = this.signedInFlow.bind(this);
    this.requestSignIn = this.requestSignIn.bind(this);
    this.requestSignOut = this.requestSignOut.bind(this);
    this.signedOutFlow = this.signedOutFlow.bind(this);
    this.requestMine = this.requestMine.bind(this);
  }

  componentDidMount() {
    let loggedIn = this.props.wallet.isSignedIn();
    if (loggedIn) {
      this.signedInFlow();
    } else {
      this.signedOutFlow();
    }
  }

  async signedInFlow() {
    console.log("come in sign in flow")
    this.setState({
      login: true,
    })
    const accountId = await this.props.wallet.getAccountId()
    if (window.location.search.includes("account_id")) {
      window.location.replace(window.location.origin + window.location.pathname)
    }
  }

  async requestSignIn() {
    const appTitle = 'NEAR React template';
    await this.props.wallet.requestSignIn(
      window.nearConfig.contractName,
      appTitle
    )
  }

  requestSignOut() {
    this.props.wallet.signOut();
    setTimeout(this.signedOutFlow, 500);
    console.log("after sign out", this.props.wallet.isSignedIn())
  }

  signedOutFlow() {
    if (window.location.search.includes("account_id")) {
      window.location.replace(window.location.origin + window.location.pathname)
    }
    this.setState({
      login: false,
      speech: null
    })
  }

  async requestMine() {
    console.log("trying to mine")
    const mined = await mine(this.props.contract);
    console.log("Mining success:", mined);
  }

  render() {
    let style = {
      fontSize: "1.5rem",
      color: "#0072CE",
      textShadow: "1px 1px #D1CCBD"
    }
    return (
      <div className="App-header">
        <div className="image-wrapper">
          <img className="logo" src={nearlogo} alt="NEAR logo" />
          <p><span role="img" aria-label="chain">⛓</span> This little react app is connected to blockchain right now. <span role="img" aria-label="chain">⛓</span></p>
        </div>
        <div>
          <button onClick={this.requestMine}>Mine</button>
        </div>
        <div>
          {this.state.login ? 
            <div>
              <button onClick={this.requestSignOut}>Log out</button>
            </div>
            : <button onClick={this.requestSignIn}>Log in with NEAR</button>}
        </div>
        <div>
          <div className="logo-wrapper">
            <img src={near} className="App-logo margin-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    )
  }

}

export default App;
