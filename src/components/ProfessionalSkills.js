import React from "react";

const ProfessionalSkills = () => {
  return (
    <div className="professional-skills bg-light p-4 mb-4">
      <h2 className="mb-3">Professional Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Technical Skills</h4>
          <ul className="list-unstyled">
            <li>Web Development: HTML, CSS, JavaScript, React.js, Node.js</li>
            <li>Machine Learning: Python, TensorFlow, scikit-learn</li>
            <li>Networking: Cisco CCNA, TCP/IP, Routing, Switching</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Soft Skills</h4>
          <ul className="list-unstyled">
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
