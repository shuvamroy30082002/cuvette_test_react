import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <img src="/images/landing-image.png" alt="Landing" className="landing-image" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
        <p className="lock-icon">🔒 end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default LandingPage;
