import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { CSSTransition } from "react-transition-group";

import "../global.scss";

//images
// import MobileMenuIcon from "../svgs/map.svg";

import HeroVisual from "../images/acorn-hero-visual.png";
import HeroVisualMobile from "../images/acorn-hero-visual-mobile.png";

import FeatureVisualOne from "../images/acorn-feature-vis-1.png";
import FeatureVisualTwo from "../images/acorn-feature-vis-2.png";
import FeatureVisualThree from "../images/acorn-feature-vis-3.png";
import FeatureVisualFourMap from "../images/acorn-feature-vis-4-map.png";
import FeatureVisualFourTable from "../images/acorn-feature-vis-4-table.png";
import FeatureVisualFourPriority from "../images/acorn-feature-vis-4-priority.png";

import DownloadMac from "../svgs/apple.svg";
import DownloadWindows from "../svgs/windows.svg";
import DownloadLinux from "../svgs/linux.svg";
import MenuMobile from "../components/MenuMobile/MenuMobile";
import FeatureSlide from "../components/FeatureSlide/FeatureSlide";
import { scrollToSection } from "../components/Scroll";

// import FeatureVisualFourMap from "../images/acorn-feature-visual-4-map-view.png";

// markup

enum ActiveSlide {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
}

const IndexPage = () => {
  const feature1ref = useRef(null);
  const feature2ref = useRef(null);
  const feature3ref = useRef(null);
  const feature4ref = useRef(null);
  const feature4ref2 = useRef(null);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  // For About Acorn Section (features scrolling)
  const [activeSlide, setActiveSlide] = useState(ActiveSlide.Feature1);

  const featureCallback = (activeSlide: ActiveSlide) => (entries: any) => {
    const [entry] = entries;
    console.log(activeSlide, entry);
    if (entry.isIntersecting) {
      setActiveSlide(activeSlide);
    }
  };
  useEffect(() => {
    const ob = new IntersectionObserver(featureCallback(ActiveSlide.Feature1));
    if (feature1ref.current) {
      ob.observe(feature1ref.current);
    }
    return () => {
      if (feature1ref.current) {
        ob.unobserve(feature1ref.current);
      }
    };
  }, [feature1ref]);
  useEffect(() => {
    const ob = new IntersectionObserver(featureCallback(ActiveSlide.Feature2));
    if (feature2ref.current) {
      ob.observe(feature2ref.current);
    }
    return () => {
      if (feature2ref.current) {
        ob.unobserve(feature2ref.current);
      }
    };
  }, [feature2ref]);
  useEffect(() => {
    const ob = new IntersectionObserver(featureCallback(ActiveSlide.Feature3));
    if (feature3ref.current) {
      ob.observe(feature3ref.current);
    }
    return () => {
      if (feature3ref.current) {
        ob.unobserve(feature3ref.current);
      }
    };
  }, [feature3ref]);
  useEffect(() => {
    const ob = new IntersectionObserver(featureCallback(ActiveSlide.Feature4));
    if (feature4ref.current) {
      ob.observe(feature4ref.current);
    }
    return () => {
      if (feature4ref.current) {
        ob.unobserve(feature4ref.current);
      }
    };
  }, [feature4ref]);
  useEffect(() => {
    const ob = new IntersectionObserver(featureCallback(ActiveSlide.Feature4));
    if (feature4ref2.current) {
      ob.observe(feature4ref2.current);
    }
    return () => {
      if (feature4ref2.current) {
        ob.unobserve(feature4ref2.current);
      }
    };
  }, [feature4ref2]);

  return (
    <>
      {/* <SEO title="Scalable & distributed framework for economic network coordination" /> */}
      <Header />

      {/* Mobile menu is only visible on smaller screens */}
      {/* <MenuMobile
        isOpen={openMenuMobile}
        closeMenu={() => setOpenMenuMobile(false)}
      /> */}
      {/* <div className="menu-mobile-icon" onClick={() => setOpenMenuMobile(true)}>
        <MobileMenuIcon />
      </div> */}

      <main>
        <title>Home Page</title>
        {/* Landing page hero */}
        <div className="section hero" id="hero">
          {/* Hero Content */}
          <div className="hero-content-wrapper">
            {/* Tags */}
            <div className="tags">
              <div className="tag-wrapper">open source</div>
              <div className="tag-wrapper secondary">holochain framework</div>
              <div className="tag-wrapper tertiary">project management</div>
            </div>
            <h1 className="heading non-tablet">
              Peer-to-Peer Agile <br />
              Project Management <br />
              For Software Teams
            </h1>

            <h1 className="heading tablet">
              Peer-to-Peer Agile Project Management For Software Teams
            </h1>

            <p>
              Acorn is an open-source, peer-to-peer project management
              application. It is designed and built as a scrum-alternative,
              Agile Development Pattern for distributed software development
              teams.
            </p>

            <div className="buttons-row">
              <Button
                text="Download for free"
                green
                arrowIcon
                href="/#download"
                onClick={scrollToSection}
              />

              <Button
                text="Learn more"
                arrowIcon
                href="/#about"
                onClick={scrollToSection}
              />
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual-wrapper">
            {/* <img
              className="hero-visual"
              src={HeroVisual}
              alt="Acorn Hero Visual"
            /> */}
            {/* <img
              className="hero-visual-mobile"
              src={HeroVisualMobile}
              alt="Acorn Hero Visual"
            /> */}
          </div>
        </div>

        {/* About Acorn */}
        {/* Start Sticky Wrapper */}
        <div>
          <div
            className={`section about ${
              activeSlide === ActiveSlide.Feature1
                ? "feature-1"
                : activeSlide === ActiveSlide.Feature2
                ? "feature-2"
                : activeSlide === ActiveSlide.Feature3
                ? "feature-3"
                : activeSlide === ActiveSlide.Feature4
                ? "feature-4"
                : ""
            }`}
            id="about"
          >
            {/* Heading */}
            <div className="section-heading">
              <h2>What's special about Acorn</h2>
              <p>Acorn is not your typical project management tool. See why.</p>
            </div>
            {/* Acorn Features */}
            <div className="about-acorn-features-wrapper">
              {/* Acorn Feature 1 */}
              <FeatureSlide
                isActive={activeSlide === ActiveSlide.Feature1}
                title="Truly distributed collaboration"
                description={
                  <p>
                    Acorn is built as a{" "}
                    <a href="https://www.holochain.org/" target="_blank">
                      Holochain
                    </a>{" "}
                    application, meaning it runs on decentralized peer-to-peer
                    computing and can be used without server infrastructure or a
                    hosting service. The users of a particular Acorn instance
                    are its hosting power.
                  </p>
                }
                buttonLink="https://www.holochain.org/"
                visual={FeatureVisualOne}
                className="feature-slide-1"
              />
              {/* Acorn Feature 2 */}
              <FeatureSlide
                isActive={activeSlide === ActiveSlide.Feature2}
                title="Project management via the lens of Intended Outcomes"
                description="In Acorn's ontology projects are managed through the lens
                of Intended Outcomes, their dependencies, Scope, and
                Achievement Status in a Plan-Do-Check-Act Cycle process.
                This helps you and your distributed team stay on track
                while working on a complex project."
                buttonLink="https://docs.acorn.software/about-acorn/the-ontology-of-acorn"
                visual={FeatureVisualTwo}
                className="feature-slide-2"
              />
              {/* Acorn Feature 3 */}
              <FeatureSlide
                isActive={activeSlide === ActiveSlide.Feature3}
                title="A more intelligent project management"
                description="Acorn provides the sweet-spot combination of annotated and
                computed metadata to help you and your team make sense of
                the complexity of your project, make measurable
                estimations of Outcome achievement durations, and to see
                the progress status of the project as a whole."
                buttonLink="https://docs.acorn.software/about-acorn/the-ontology-of-acorn#outcome-scope"
                visual={FeatureVisualThree}
                className="feature-slide-3"
              />

              {/* Acorn Feature 4 */}
              <FeatureSlide
                isActive={activeSlide === ActiveSlide.Feature4}
                title="Project Views for different focuses & insights"
                description={
                  <p>
                    Each project view in Acorn gives you and your team members
                    the focus you each have.{" "}
                    <a
                      href="https://docs.acorn.software/project-views/map-view"
                      target="_blank"
                    >
                      Map View
                    </a>{" "}
                    is the most useful view for team members in Project
                    Management or Product Ownership hat as it gives an overview
                    of the project status as a whole.{" "}
                    <a
                      href="https://docs.acorn.software/project-views/table-view"
                      target="_blank"
                    >
                      Table View
                    </a>{" "}
                    which is task-oriented, and{" "}
                    <a
                      href="https://docs.acorn.software/project-views/high-priority-view"
                      target="_blank"
                    >
                      Priority View
                    </a>{" "}
                    displays the Outcomes that are marked as High Priority.
                  </p>
                }
                isFramedVisual
                tabbedVisuals
                tabTitle1="Map View"
                tabTitle2="Table View"
                tabTitle3="Priority View"
                tabVisual1={FeatureVisualFourMap}
                tabVisual2={FeatureVisualFourTable}
                tabVisual3={FeatureVisualFourPriority}
                className="feature-slide-4"
                buttonLinkOther={
                  <a
                    href="/#download"
                    className="acorn-feature-link"
                    onClick={scrollToSection}
                  >
                    <Button text="Dowload for Free" arrowIcon />
                  </a>
                }
              />
            </div>
          </div>

          {/* Slide Activator - Empty Sections for Scrolling Effect */}
          <div className="slide-activator" ref={feature1ref}></div>
          <div className="slide-activator" ref={feature2ref}></div>
          <div className="slide-activator" ref={feature3ref}></div>
          <div className="slide-activator" ref={feature4ref}></div>
        </div>
        {/* End Sticky Wrapper */}

        {/* Who Section */}
        <div className="section who" id="who">
          <h2>Who's Involved in Developing Acorn</h2>
          <p>
            Acorn was envisioned and prototyped (using a third party platform)
            by the <a>Holochain</a> core development team in 2018 to organize
            their own planning and execution process.
          </p>
          <p>
            In August 2019 <a>Sprillow</a> undertook a design process and began
            building Acorn on Holochain and continue to today. In June 2022 the
            first major release of Acorn (Alpha) was published and it's
            currently in Alpha testing phase.
          </p>
          <p>
            <a> Lightningrod Labs</a> is the container for the continuous
            development of Acorn alongside some other projects powered by
            Holochain.
          </p>

          <Button
            text="Download Acorn Alpha"
            green
            arrowIcon
            href="/#download"
            onClick={scrollToSection}
          />

          {/* <div className="who-visual-wrapper"></div> */}
        </div>

        {/* Download Section */}
        <div className="section download" id="download" ref={feature4ref2}>
          <h2>Download the latest Acorn alpha release</h2>
          <p>
            Available as native desktop app for MacOS, Windows and Linux. <br />{" "}
            Download and install the latest version of Acorn's alpha release to
            get started.
          </p>
          <div className="buttons-row three">
            <Button
              text="Download for MacOS"
              visualIcon={<DownloadMac />}
              withBackground
              title="https://github.com/lightningrodlabs/acorn/releases/download/v1.0.4-alpha/Acorn-1.0.4-alpha.dmg"
              onClick={() => {
                window.open(
                  "https://github.com/lightningrodlabs/acorn/releases/download/v1.0.4-alpha/Acorn-1.0.4-alpha.dmg",
                  "_blank"
                );
              }}
            />
            <Button
              text="Download for Windows"
              visualIcon={<DownloadWindows />}
              withBackground
              title="https://github.com/lightningrodlabs/acorn/releases/download/v1.0.4-alpha/Acorn.Setup.1.0.4-alpha.exe"
              onClick={() => {
                window.open(
                  "https://github.com/lightningrodlabs/acorn/releases/download/v1.0.4-alpha/Acorn.Setup.1.0.4-alpha.exe",
                  "_blank"
                );
              }}
            />
            <Button
              text="Download for Linux"
              visualIcon={<DownloadLinux />}
              withBackground
              title="https://github.com/lightningrodlabs/acorn/releases/download/v1.0.4-alpha/Acorn-1.0.4-alpha.AppImage"
              onClick={() => {
                window.open(
                  "https://github.com/lightningrodlabs/acorn/releases/download/v1.0.4-alpha/Acorn-1.0.4-alpha.AppImage",
                  "_blank"
                );
              }}
            />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

export function Head(props: HeadProps) {
  return <SEO />;
}

