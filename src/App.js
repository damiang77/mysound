import React, { useState } from "react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import LandingPage from "./Pages/LandingPage";
import MusicPage from "./Pages/MusicPage";
import PlayerContextProvider from "./Context/PlayerContext";
import LoginContextProvider from "./Context/LoginContext";
import Login from "./components/Login/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <PlayerContextProvider>
        <LoginContextProvider>
          <MusicPlayer />
          <Login />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/music">
              <MusicPage />
            </Route>
          </Switch>
        </LoginContextProvider>
      </PlayerContextProvider>
    </Router>
  );
}

export default App;
