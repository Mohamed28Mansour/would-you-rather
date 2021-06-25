import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.scss";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddQuestion from "./pages/AddQuestion";
import SingleQuestion from "./components/SingleQuestion";
import Leaderboard from "./pages/Leaderboard";

function App({ dispatch }) {
  const [isNavigationAllowed, setIsNavigationAllowed] = useState(false);

  const handleNavigationPermission = () => {
    setIsNavigationAllowed(true);
  };

  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home handleNavigationPermission={handleNavigationPermission} />
        </Route>
        <Route exact path="/add">
          <AddQuestion isNavigationAllowed={isNavigationAllowed} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard isNavigationAllowed={isNavigationAllowed} />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard isNavigationAllowed={isNavigationAllowed} />
        </Route>
        <Route exact path="/question/:question_id">
          <SingleQuestion isNavigationAllowed={isNavigationAllowed} />
        </Route>
      </Switch>
    </div>
  );
}

export default connect()(App);
