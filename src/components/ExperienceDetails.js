import React from "react";
import "./ExperienceDetails.css";
const ExperienceDetails = () => {
  return (
    <div className="experience-details bg-light p-4 mb-4">
      <h2 className="mb-3">Experience Details</h2>
      <p>
        Software Engineer
        <br />
        [Arbisoft]
        <br />
        [2022] - [2024]
      </p>
      <ul className="list-unstyled">
        <li>
          Developed and maintained web applications using React.js and Node.js.
        </li>
        <li>
          Implemented machine learning algorithms for data analysis and
          prediction.
        </li>
        <li>
          Configured and managed networking infrastructure including routers and
          switches.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceDetails;
