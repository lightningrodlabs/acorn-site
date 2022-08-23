import React, { useState } from "react";
import "./Header.scss";

// images
import MobileMenuIcon from "../../svgs/map.svg";

import AcornLogo from "../../images/acorn-alpha-logo.png";

import ExternalLink from "../../svgs/external-link.svg";

import { scrollToSection, scrollToHome } from "../Scroll";
import MenuMobile from "../MenuMobile/MenuMobile";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {

  const [openMenuMobile, setOpenMenuMobile] = useState(false);
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
      <nav className="header-menu-desktop">
        <li>
        <a className="header-menu-item desktop-only" href="/#why" onClick={scrollToSection}>
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

       {/* Mobile menu is only visible on smaller screens */}
       <MenuMobile
        isOpen={openMenuMobile}
        closeMenu={() => setOpenMenuMobile(false)}
      />
      <div className="menu-mobile-icon" onClick={() => setOpenMenuMobile(true)}>
        <MobileMenuIcon />
      </div>
    </header>
  );
};

export default Header;
