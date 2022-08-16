import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import SEO from "../components/seo";

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
import { HeadProps } from "gatsby";

// import FeatureVisualFourMap from "../images/acorn-feature-visual-4-map-view.png";

// markup

enum ActiveSlide {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
}

const IndexPage = () => {
  const io = useRef<IntersectionObserver>();
  const feature1ref = useRef(null);
  const feature2ref = useRef(null);
  const feature3ref = useRef(null);
  const feature4ref = useRef(null);
  const feature4ref2 = useRef(null);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  // For About Acorn Section (features scrolling)
  const [activeSlide, setActiveSlide] = useState(ActiveSlide.Feature1);

  useEffect(() => {
    const featureCallback: IntersectionObserverCallback = (entries) => {
      const firstIntersectingSection = entries.find((e) => {
        return e.isIntersecting
      })
      if (!firstIntersectingSection) {
        return
      }
      let activeSlide: ActiveSlide
      if (firstIntersectingSection.target.id === 'slide-1') {
        activeSlide = ActiveSlide.Feature1
      } else if (firstIntersectingSection.target.id === 'slide-2') {
        activeSlide = ActiveSlide.Feature2
      } else if (firstIntersectingSection.target.id === 'slide-3') {
        activeSlide = ActiveSlide.Feature3
      } else if (firstIntersectingSection.target.id === 'slide-4'
                  || firstIntersectingSection.target.id === 'download') {
        activeSlide = ActiveSlide.Feature4
      } else {
        activeSlide = ActiveSlide.Feature1
      }
      setActiveSlide(activeSlide)
    };
    const ob = new IntersectionObserver(featureCallback, {
      // this value of 0.5 means that any element
      // must be at least half on screen (top or bottom)
      // in order to be considered 'visible' or 'isIntersecting'
      // for the purposes of our slideshow
      threshold: 0.5
    });
    io.current = ob;
    return () => {
      if (io.current) {
        // @ts-ignore
        io.current.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    if (feature1ref.current) {
      io.current!.observe(feature1ref.current);
    }
  }, [feature1ref]);
  useEffect(() => {
    if (feature2ref.current) {
      io.current!.observe(feature2ref.current);
    }
  }, [feature2ref]);
  useEffect(() => {
    if (feature3ref.current) {
      io.current!.observe(feature3ref.current);
    }
  }, [feature3ref]);
  useEffect(() => {
    if (feature4ref.current) {
      io.current!.observe(feature4ref.current);
    }
  }, [feature4ref]);
  useEffect(() => {
    if (feature4ref2.current) {
      io.current!.observe(feature4ref2.current);
    }
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
          {/* Heading */}
          <div className="section-heading features" id="about">
            <h2>What's special about Acorn</h2>
            <p>
              Acorn is not your typical project management tool. Here are a few
              reasons why. 👇
            </p>
          </div>

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
          >
            {/* Acorn Features */}
            <div className="about-acorn-features-wrapper">
              {/* Acorn Feature 1 */}
              <FeatureSlide
                isActive={activeSlide === ActiveSlide.Feature1}
                slideNumber="1"
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
                slideNumber="2"
                title="Intended Outcomes, not goals"
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
                slideNumber="3"
                title="More intelligent project management"
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
                slideNumber="4"
                title="Multiple lenses for your project"
                description={
                  <p>
                    Each project view in Acorn helps you and your team members
                    when you have a different kind of focus. There is{" "}
                    <a
                      href="https://docs.acorn.software/project-views/map-view"
                      target="_blank"
                    >
                      Map View
                    </a>{" "}
                    to offer a high-level overview,{" "}
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
                    for aligning your team.
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
              />
            </div>
          </div>

          {/* Slide Activator - Empty Sections for Scrolling Effect */}
          <div className="slide-activator pink" id="slide-1" ref={feature1ref}></div>
          <div className="slide-activator blue" id="slide-2" ref={feature2ref}></div>
          <div className="slide-activator green" id="slide-3" ref={feature3ref}></div>
          <div className="slide-activator yellow" id="slide-4" ref={feature4ref}></div>
        </div>
        {/* End Sticky Wrapper */}

        {/* Who Section */}
        <div className="section who" id="who">
          <h2>Who's Involved in Developing Acorn</h2>
          <p>
            Acorn was envisioned and prototyped (using a third party platform)
            by the <a href="https://holochain.org" target="_blank">Holochain</a> core development team in 2018 to organize
            their own planning and execution process.
          </p>
          <p>
            In August 2019 <a href="https://sprillow.com" target="_blank">Sprillow</a> undertook a design process and began
            building Acorn on Holochain and continues to today. In June 2022 the
            first major release of Acorn (Alpha) was published and it's
            currently in an Alpha testing phase.
          </p>
          <p>
            <a href="https://lightningrodlabs.org" target="_blank">Lightningrod Labs</a> is the container for the continuous
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