import React from "react";
import "./Intro.css";
const Intro = () => {
  return (
    <div className="intro bg-light p-4 mb-4">
      <div className="row">
        <div className="col-md-3">
          <img
            src="/pic.jpeg"
            alt="Ahmad"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-9">
          <h2 className="mb-3">Muhammad Ahmad Tariq</h2>
          <h6>Software Engineer, Web Developer </h6>
        </div>
      </div>
    </div>
  );
};

export default Intro;
