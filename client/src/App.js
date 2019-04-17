import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import UnsubscriptionPage from "./components/UnsubscriptionPage";
import SubscriptionPage from "./components/SubscriptionPage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main className="container">
            <img src="http://www.stickpng.com/assets/images/5a4fbb7bda2b4f099b95da15.png" width="100" height="100" alt="Logo" />
            <Route exact path="/" component={SubscriptionPage} />
            <Route path="/unsubscribe" component={UnsubscriptionPage} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
