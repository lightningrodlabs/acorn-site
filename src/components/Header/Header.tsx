import React from "react";
import "./Header.scss";

import ExternalLink from "../../svgs/external-link.svg";

import { scrollToSection, scrollToHome } from "../Scroll";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <a title="Acorn Logo" className="logo" onClick={scrollToHome}>
        <h1>
          <div className="acorn-logo-wrapper">Logo</div>
          {/* <AcornLogo /> */}
        </h1>
      </a>
      <nav>
        <li>
          <a className="" href="/#about" onClick={scrollToSection}>
            About Acorn
          </a>
          <a className="" href="/#download" onClick={scrollToSection}>
            Download
          </a>
          <a className="" href="https://docs.acorn.software" target="_blank">
            Knowledge Base
            <ExternalLink />
          </a>
          <a
            className="social-link"
            href="https://github.com/lightningrodlabs/acorn"
            target="_blank"
          >
            GitHub
            <ExternalLink />
          </a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
