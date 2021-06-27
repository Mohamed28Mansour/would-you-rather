import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.scss";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddQuestion from "./pages/AddQuestion";
import SingleQuestion from "./pages/SingleQuestion";
import Leaderboard from "./pages/Leaderboard";
import ResultPage from "./pages/ResultPage";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPath from "./pages/ErrorPath";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <PrivateRoute exact path="/add">
          <AddQuestion />
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute exact path="/leaderboard">
          <Leaderboard />
        </PrivateRoute>

        <PrivateRoute exact path="/question/:question_id">
          <SingleQuestion />
        </PrivateRoute>

        <PrivateRoute exact path="/result/:question_id">
          <ResultPage />
        </PrivateRoute>

        <PrivateRoute>
          <ErrorPath />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default connect()(App);
