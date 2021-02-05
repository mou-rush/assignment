import React from "react";
import Boxes from "./components/Boxes";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ResourceDetail from "./components/ResourceDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resources" exact component={Boxes} />
        <Route path="/resources/:id" exact component={ResourceDetail} />
      </Switch>
    </Router>
  );
}

/*Placeholder component to demonstrate the two routes */
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "200px",
      }}
    >
      <Link to={`/resources`}>
        <button
          style={{
            color: "#ffcc29",
            height: "200px",
            width: "200px",
            background: "#007965",
            borderRadius: "50px",
          }}
          type="button"
        >
          Please, Click Me!
        </button>
      </Link>
    </div>
  );
};

export default App;
