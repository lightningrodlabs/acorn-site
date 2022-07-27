import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { CSSTransition } from "react-transition-group";

import "../global.scss";

//images
import MobileMenuIcon from "../svgs/map.svg";

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

// import FeatureVisualFourMap from "../images/acorn-feature-visual-4-map-view.png";

// markup

enum ActiveSlide {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
}

const IndexPage = () => {
  // const feature1ref = useRef(null);
  // const feature2ref = useRef(null);
  // const feature3ref = useRef(null);
  // const feature4ref = useRef(null);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  // For About Acorn Section (features scrolling)
  const [activeSlide, setActiveSlide] = useState(ActiveSlide.Feature1);
  useEffect(() => {
    const onScroll = (ev: Event) => {
      // console.log(ev.target.scrollingElement.scrollTop)
      // console.log(ev.target.scrollingElement.scrollTopMax)
      const currentScroll = ev.target.scrollingElement.scrollTop;
      const maxScroll = ev.target.scrollingElement.scrollHeight;
      // console.log(currentScroll, maxScroll)
      const percentOfScroll = (currentScroll / maxScroll) * 100;
      // console.log(percentOfScroll);
      // TODO:
      // we can use percent of scroll, to drive the slideshow / animation
      // series for Acorn features
      if (percentOfScroll >= 30 && percentOfScroll < 40) {
        setActiveSlide(ActiveSlide.Feature1);
      } else if (percentOfScroll >= 40 && percentOfScroll < 50) {
        setActiveSlide(ActiveSlide.Feature2);
      } else if (percentOfScroll >= 50 && percentOfScroll < 60) {
        setActiveSlide(ActiveSlide.Feature3);
      } else if (percentOfScroll >= 70 && percentOfScroll >= 80) {
        setActiveSlide(ActiveSlide.Feature4);
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("calling");
  //     setActiveSlide(ActiveSlide.Feature1);
  //   }, 1000);
  // }, []);

  // const featureCallback = (activeSlide: ActiveSlide) => (entries: any) => {
  //   const [entry] = entries;
  //   // console.log(entry.isIntersecting);
  //   if (entry.isIntersecting) {
  //     // setActiveSlide(activeSlide);
  //   }
  // };
  // useEffect(() => {
  //   const ob = new IntersectionObserver(featureCallback(ActiveSlide.Feature1));
  //   if (feature1ref.current) {
  //     ob.observe(feature1ref.current);
  //   }
  //   return () => {
  //     if (feature1ref.current) {
  //       ob.unobserve(feature1ref.current);
  //     }
  //   };
  // }, [feature1ref]);

  return (
    <>
      {/* <SEO title="Scalable & distributed framework for economic network coordination" /> */}
      <Header />

      {/* Mobile menu is only visible on smaller screens */}
      <MenuMobile
        isOpen={openMenuMobile}
        closeMenu={() => setOpenMenuMobile(false)}
      />
      <div className="menu-mobile-icon" onClick={() => setOpenMenuMobile(true)}>
        <MobileMenuIcon />
      </div>

      <main>
        <title>Home Page</title>
        {/* Landing page hero */}
        <div className="section hero" id="hero">
          <div className="hero-visual-wrapper">
            <img
              className="hero-visual"
              src={HeroVisual}
              alt="Acorn Hero Visual"
            />
            <img
              className="hero-visual-mobile"
              src={HeroVisualMobile}
              alt="Acorn Hero Visual"
            />
          </div>
          <div className="hero-content-wrapper">
            {/* Tags */}
            <div className="tags">
              <div className="tag-wrapper">open source</div>
              <div className="tag-wrapper secondary">holochain framework</div>
              <div className="tag-wrapper tertiary">project management</div>
            </div>
            <h1>
              Peer-to-Peer Agile <br />
              Project Management <br />
              For Software Teams
            </h1>

            <p>
              Acorn is an open-source, peer-to-peer project management
              application. It is designed and built as a scrum-alternative,
              Agile Development Pattern for distributed software development
              teams.
            </p>

            <div className="buttons-row">
              <Button text="Download for free" green arrowIcon />
              <Button text="Learn more" arrowIcon />
            </div>
          </div>
        </div>

        {/* About Acorn */}
        {/* Start Sticky Wrapper */}

        <div>
          <div className="section about" id="about">
            {/* Heading */}
            <div className="section-heading">
              <h2>What's special about Acorn</h2>
              <p>
                Acorn is not your typical project management tool. Here are a
                few reasons.
              </p>
            </div>
            {/* Acorn Features */}
            <div className="about-acorn-features-wrapper">
              {/* Acorn Feature 1 */}
              <CSSTransition
                in={activeSlide === ActiveSlide.Feature1}
                timeout={100}
                classNames="about-acorn-feature-animation"
              >
                <div className="about-acorn-feature-wrapper">
                  {/* Feature Content */}

                  <div className="acorn-feature-content-wrapper">
                    <h2>Truly distributed collaboration</h2>
                    <p>
                      Acorn is built as a Holochain application, meaning it runs
                      on decentralized peer-to-peer computing and can be used
                      without server infrastructure or a hosting service. The
                      users of a particular Acorn instance are its hosting
                      power.
                    </p>
                    <Button text="Learn more" arrowIcon />
                  </div>
                  {/* Feature Visual */}
                  <div className="acorn-feature-visual-wrapper">
                    <img
                      className="feature-visual"
                      src={FeatureVisualOne}
                      alt="Acorn Feature Visual for Truly distributed collaboration"
                    />
                  </div>
                </div>
              </CSSTransition>

              {/* Acorn Feature 2 */}
              <CSSTransition
                in={activeSlide === ActiveSlide.Feature2}
                timeout={100}
                classNames="about-acorn-feature-animation"
              >
                <div className="about-acorn-feature-wrapper">
                  {/* Feature Content */}
                  <div className="acorn-feature-content-wrapper">
                    <h2>
                      Project management via the lens of Intended Outcomes
                    </h2>
                    <p>
                      In Acorn's ontology projects are managed through the lens
                      of Intended Outcomes, their dependencies, Scope, and
                      Achievement Status in a Plan-Do-Check-Act Cycle process.
                      This helps you and your distributed team stay on track
                      while working on a complex project.
                    </p>
                    <Button text="Learn more" arrowIcon />
                  </div>
                  {/* Feature Visual */}
                  <div className="acorn-feature-visual-wrapper">
                    <img
                      className="feature-visual"
                      src={FeatureVisualTwo}
                      alt="Acorn Feature Visual for Truly Distributed Collaboration"
                    />
                  </div>
                </div>
              </CSSTransition>
              {/* Acorn Feature 3 */}
              <CSSTransition
                in={activeSlide === ActiveSlide.Feature3}
                timeout={100}
                classNames="about-acorn-feature-animation"
              >
                <div className="about-acorn-feature-wrapper">
                  {/* Feature Content */}
                  <div className="acorn-feature-content-wrapper">
                    <h2>A more intelligent project management</h2>
                    <p>
                      Acorn provides the sweet-spot combination of annotated and
                      computed metadata to help you and your team make sense of
                      the complexity of your project, make measurable
                      estimations of Outcome achievement durations, and to see
                      the progress status of the project as a whole.
                    </p>
                    <Button text="Learn more" arrowIcon />
                  </div>
                  {/* Feature Visual */}
                  <div className="acorn-feature-visual-wrapper">
                    <img
                      className="feature-visual"
                      src={FeatureVisualThree}
                      alt="Acorn Feature Visual for A more intelligent project management"
                    />
                  </div>
                </div>
              </CSSTransition>
              {/* Acorn Feature 4 */}
              <CSSTransition
                in={activeSlide === ActiveSlide.Feature4}
                timeout={100}
                classNames="about-acorn-feature-animation"
              >
                <div className="about-acorn-feature-wrapper">
                  {/* Feature Content */}
                  <div className="acorn-feature-content-wrapper">
                    <h2>Project Views for different focuses and insights</h2>
                    <p>
                      Each project view in Acorn gives you and your team members
                      the focus you each have. Map View is the most useful view
                      for team members in Project Management or Product
                      Ownership hat as it gives an overview of the project
                      status as a whole. Table View displays the project
                      Outcomes and their properties in a table format and is
                      most useful for team members in 'doer' hat. Priority View
                      displays the Outcomes that are marked as High Priority.
                    </p>
                    <Button text="Learn more" arrowIcon />
                  </div>
                  {/* Feature Visual */}
                  <div className="acorn-feature-visual-wrapper">
                    <img
                      className="feature-visual framed"
                      src={FeatureVisualFourMap}
                      alt="Acorn Feature Visual for Project Views"
                    />
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
          {/* Empty Sections for Scrolling Effect */}
          <div className="section"></div>
          <div className="section"></div>
          <div className="section"></div>
        </div>
        {/* End Sticky Wrapper */}

        {/* Download */}
        <div className="section" id="download">
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
            />
            <Button
              text="Download for Windows"
              visualIcon={<DownloadWindows />}
              withBackground
            />
            <Button
              text="Download for Linux"
              visualIcon={<DownloadLinux />}
              withBackground
            />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
