import React from "react";
import { CSSTransition } from "react-transition-group";
import { scrollToSection } from "../Scroll";

import "./MenuMobile.scss";

// images
import AcornLogo from "../../images/acorn-alpha-logo.png";
import PoweredByHolochain from "../../images/acorn-powered-by-holochain.png";
import MobileMenuCloseIcon from "../../svgs/x.svg";
import ExternalLink from "../../svgs/external-link.svg";

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
              <MobileMenuCloseIcon className="close-icon" />
            </div>
            <a title="Acorn Logo" onClick={scrollToHome}>
              <h1 className="menu-mobile-logo-wrapper">
                <img src={AcornLogo} className="menu-mobile-logo" />
                <img className="menu-mobile-powered-holochain" src={PoweredByHolochain} alt="Powered by Holochain"/>
              </h1>
            </a>

            <div className="menu-mobile-nav-socials">
              <nav className="menu-mobile-nav">
                <li>
                  <a href="/#why" onClick={onClickA}>
                    Why Acorn
                  </a>
                </li>
                <li>
                  <a href="/#who" onClick={onClickA}>
                    Who's Involved
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
                    Knowledge Base <ExternalLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lightningrodlabs/acorn"
                    target="_blank"
                    onClick={onClickA}
                  >
                    GitHub <ExternalLink />
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
