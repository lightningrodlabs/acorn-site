import React from "react";
import "./Footer.scss";

export type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="footer-row first"></div>

      <div className="footer-row second">
        <p>
          © 2020-2022 Harris-Braun Enterprises, LLC. Licensed under the{" "}
          <a href="https://opensource.org/licenses/CAL-1.0" target="_blank">
            {" "}
            Cryptographic Autonomy License v1.0{" "}
          </a>
          .
        </p>

        {/* Social Links */}
        <div className="social-links-wrapper">
          <a className="social-link" href="" target="_blank">
            Knowledge Base
          </a>
          <a className="social-link" href="" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
