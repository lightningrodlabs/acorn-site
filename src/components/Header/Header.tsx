import React from "react";
import "./Header.scss";

// images
import AcornLogo from "../../images/acorn-alpha-logo.png";

import ExternalLink from "../../svgs/external-link.svg";

import { scrollToSection, scrollToHome } from "../Scroll";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <a title="Acorn Logo" className="logo" onClick={scrollToHome}>
        <h1>
          <div className="acorn-logo-wrapper">
           <img className="acorn-logo" src={AcornLogo} alt="Acorn Logo"/>
          </div>
          {/* <AcornLogo /> */}
        </h1>
      </a>
      <nav>
        <li>
        <a className="header-menu-item desktop-only" href="/#about" onClick={scrollToSection}>
            Why Acorn
          </a>
          <a className="header-menu-item desktop-only" href="/#who" onClick={scrollToSection}>
            Who's Involved
          </a>
          <a className="header-menu-item desktop-only" href="/#download" onClick={scrollToSection}>
            Download
          </a>
          <a className="header-menu-item" href="https://docs.acorn.software" target="_blank">
            Knowledge Base
            <ExternalLink />
          </a>
          <a
            className="header-menu-item"
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
