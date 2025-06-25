import React from "react";

import Button from "../../components/Button/Button";

import "./Footer.scss";

export type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="footer-row first">
        {/* Join Mailing List */}
        {/* TODO: add this section */}
        {/* <div className="join-list-wrapper">
          <h3>
            Join the Acorn alpha <br /> testing mailing list
          </h3>
          <div className="input-wrapper">
            <input placeholder="Enter your email address" />
          </div>
          <Button text="Join the list" withBackground arrowIcon />
        </div> */}
      </div>

      <div className="footer-row second">
        <p>
          © 2020-2025 Harris-Braun Enterprises, LLC, operating as{" "}
          <a href="https://lightningrodlabs.org/" target="_blank">
            {" "}
            Lightningrod Labs
          </a>
          . Licensed under the{" "}
          <a href="https://opensource.org/licenses/CAL-1.0" target="_blank">
            {" "}
            Cryptographic Autonomy License v1.0
          </a>
          .
        </p>
      </div>

      <div className="footer-row third">
        {/* Social Links */}
        <div className="social-links-wrapper">
          <a
            className="social-link"
            href="https://docs.acorn.software"
            target="_blank"
          >
            Knowledge Base
          </a>
          <a
            className="social-link"
            href="https://github.com/lightningrodlabs/acorn"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
