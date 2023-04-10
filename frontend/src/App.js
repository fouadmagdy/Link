import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen";
import NewsDetailsPage from "./screens/NewsDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/details/:id" component={NewsDetailsPage} />
        <Route path="/" component={HomeScreen} exact />
      </div>
    </Router>
  );
}

export default App;
