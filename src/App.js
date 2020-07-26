import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";

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
      <div className="App">
        <MusicPlayer
          musicUrl="https://api.gar.ovh/uploads/fs_13b435f0da.mpga"
          isPlayerOpen={isPlayerOpen}
          title="test"
        />
      </div>
      <div>
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
    </Router>
  );
}

export default App;
