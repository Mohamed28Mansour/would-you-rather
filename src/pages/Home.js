import React from "react";
import { connect } from "react-redux";
import SignInForm from "../components/SignInForm";

const Home = ({ handleNavigationPermission }) => {
  return <SignInForm handleNavigationPermission={handleNavigationPermission} />;
};

export default connect()(Home);
