import React from "react";
import { connect } from "react-redux";

const ErrorPath = () => {
  return (
    <div className="container">
      <div className="box">
        <img
          src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="404 error"
        />
        <h3>Page requested does not exist</h3>
      </div>
    </div>
  );
};

export default connect()(ErrorPath);
