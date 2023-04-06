import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomeScreen} exact />
      </div>
    </Router>
  );
}

export default App;
