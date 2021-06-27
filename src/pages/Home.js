import React from "react";
import { connect } from "react-redux";
import SignInForm from "../components/SignInForm";

const Home = () => {
  return <SignInForm />;
};

export default connect()(Home);
