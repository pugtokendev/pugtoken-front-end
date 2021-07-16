import React from "react";
import "./App.css";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/wallet" exact component={Wallet} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
