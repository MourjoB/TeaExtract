import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Tea Extract. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
