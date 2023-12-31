import React from "react";
import "../loader.css";

const Loader = () => {
  return (
    <>
      <div className="loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
