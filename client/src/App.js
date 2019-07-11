import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { SubscrtionRoute, UnsubscribeRoute, StatsPageRoute } from "./Router/RouterControler";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main className="container">
            <img
              src="http://www.stickpng.com/assets/images/5a4fbb7bda2b4f099b95da15.png"
              width="100"
              height="100"
              alt="Logo"
            />
            <SubscrtionRoute />
            <UnsubscribeRoute />
            <StatsPageRoute />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
