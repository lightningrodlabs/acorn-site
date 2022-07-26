import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { CSSTransition } from "react-transition-group";

import "../global.scss";

//images

import HeroVisual from "../images/acorn-hero-visual.png";
import HeroVisualMobile from "../images/acorn-hero-visual-mobile.png";

import FeatureVisualOne from "../images/acorn-feature-vis-1.png";
import FeatureVisualTwo from "../images/acorn-feature-vis-2.png";
import FeatureVisualThree from "../images/acorn-feature-vis-3.png";

import DownloadMac from "../svgs/apple.svg";
import DownloadWindows from "../svgs/windows.svg";
import DownloadLinux from "../svgs/linux.svg";

// import FeatureVisualFourMap from "../images/acorn-feature-visual-4-map-view.png";

// markup

enum ActiveSlide {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
}

const IndexPage = () => {
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
      if (percentOfScroll >= 40 && percentOfScroll < 60) {
        setActiveSlide(ActiveSlide.Feature1);
      } else if (percentOfScroll >= 60 && percentOfScroll < 70) {
        setActiveSlide(ActiveSlide.Feature2);
      } else if (percentOfScroll >= 70 && percentOfScroll < 80) {
        setActiveSlide(ActiveSlide.Feature3);
      } else if (percentOfScroll >= 80 && percentOfScroll >= 90) {
        setActiveSlide(ActiveSlide.Feature4);
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      {/* <SEO title="Scalable & distributed framework for economic network coordination" /> */}
      <Header />
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
        {/* Download */}
        <div className="section" id="download">
          <h2>Download the latest Acorn alpha release</h2>
          <p>
            Available as native desktop app for MacOS, Windows and Linux. <br />{" "}
            Download and install the latest version of Acorn’s alpha release to
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
