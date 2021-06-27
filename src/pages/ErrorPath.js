import React from "react";
import { connect } from "react-redux";

const ErrorPath = () => {
  return (
    <div>
      <h3>Page requested does not exist</h3>
    </div>
  );
};

export default connect()(ErrorPath);
