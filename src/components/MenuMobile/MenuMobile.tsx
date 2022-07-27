import React from "react";
import { CSSTransition } from "react-transition-group";
import { scrollToSection } from "../Scroll";

import "./MenuMobile.scss";

import AcornLogo from "../../images/acorn-alpha-logo.png";
import MobileMenuIcon from "../../svgs/map.svg";

export type MenuMobileProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, closeMenu }) => {
  const onClickA = (event) => {
    scrollToSection(event);
    closeMenu();
  };
  const scrollToHome = (event) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      closeMenu();
    }
  };
  return (
    <div>
      <div className="menu-mobile-wrapper">
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames="menu-mobile-animation"
          unmountOnExit
        >
          <div className="menu-mobile-nav-wrapper">
            <div className="menu-mobile-close-button" onClick={closeMenu}>
              <MobileMenuIcon className="close-icon" />
            </div>
            <a
              title="Acorn Logo"
              className="menu-mobile-logo"
              onClick={scrollToHome}
            >
              <h1>
                <img src={AcornLogo} />
              </h1>
            </a>

            <div className="menu-mobile-nav-socials">
              <nav className="menu-mobile-nav">
                <li>
                  <a href="/#about" onClick={onClickA}>
                    About Acorn
                  </a>
                </li>
                <li>
                  <a href="/#download" onClick={onClickA}>
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.acorn.software"
                    target="_blank"
                    onClick={onClickA}
                  >
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lightningrodlabs/acorn"
                    target="_blank"
                    onClick={onClickA}
                  >
                    GitHub
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MenuMobile;
