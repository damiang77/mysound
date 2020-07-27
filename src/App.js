import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import LandingPage from "./components/Pages/LandingPage";
import PlayerContext from "./components/Context/PlayerContext";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt,
} from "react-router-dom";

function App() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <Router>
      <PlayerContext>
      <div>
      <MusicPlayer/>
        <LandingPage/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <h2>pierwsza</h2>
            <button onClick={()=>setIsPlayerOpen(!isPlayerOpen)}>Hide/open</button>
          </Route>
          <Route path="/about">
            <h2>druga</h2>
          </Route>
          <Route path="/dashboard">
           <h2>trzecia</h2>
          </Route>
        </Switch>
      </div>
      </PlayerContext>
    </Router>
  );
}

export default App;
