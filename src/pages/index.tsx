import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import SEO from "../components/seo";

import "../global.scss";

//images

import FeatureVisualOne from "../images/acorn-feature-vis-1.png";
import FeatureVisualTwo from "../images/acorn-feature-vis-2.png";
import FeatureVisualThree from "../images/acorn-feature-vis-3.png";
import FeatureVisualFourMap from "../images/acorn-feature-vis-4-map.png";
import FeatureVisualFourTable from "../images/acorn-feature-vis-4-table.png";
import FeatureVisualFourPriority from "../images/acorn-feature-vis-4-priority.png";

import DownloadMac from "../svgs/apple.svg";
import DownloadWindows from "../svgs/windows.svg";
import DownloadLinux from "../svgs/linux.svg";
import FeatureSlide from "../components/FeatureSlide/FeatureSlide";
import { scrollToSection } from "../components/Scroll";
import { HeadProps } from "gatsby";

// import FeatureVisualFourMap from "../images/acorn-feature-visual-4-map-view.png";

// markup

// RGB color values, red-green-blue
const SLIDE_COLORS_RGB = [
  [225, 220, 238], // feature 1 slide bg color
  [220, 228, 206], // feature 2 slide bg color
  [233, 227, 213], // feature 3 slide bg color
  [231, 216, 204], // feature 4 slide bg color
];

const IndexPage = () => {
  const io = useRef<IntersectionObserver>();
  const io2 = useRef<IntersectionObserver>();
  const heroWrapperRef = useRef(null);
  const featuresWrapperRef = useRef(null);
  const featuresEndWrapperRef = useRef(null);
  const feature4ref = useRef(null);
  const [bgColor, setBgColor] = useState(SLIDE_COLORS_RGB[0]);

  const setColor = (v1: number[], v2: number[], percentage: number) => {
    const Rdiff = v2[0] - v1[0];
    const RtoAdd = Math.floor(Rdiff * percentage);
    const R = v1[0] + RtoAdd;
    const Gdiff = v2[1] - v1[1];
    const GtoAdd = Math.floor(Gdiff * percentage);
    const G = v1[1] + GtoAdd;
    const Bdiff = v2[2] - v1[2];
    const BtoAdd = Math.floor(Bdiff * percentage);
    const B = v1[2] + BtoAdd;
    setBgColor([R, G, B]);
  };

  useEffect(() => {
    const s = () => {
      const currentScroll =
        window.scrollY - heroWrapperRef.current.clientHeight;
      const endOfScroll = feature4ref.current.offsetTop;
      const percentageDecimal = Math.min(
        1,
        Math.max(0, currentScroll / endOfScroll)
      );
      const percentage = Math.floor(percentageDecimal * 100);
      if (percentage >= 0 && percentage <= 33) {
        // first gradient (between 1st and 2nd slide)
        setColor(
          SLIDE_COLORS_RGB[0],
          SLIDE_COLORS_RGB[1],
          percentageDecimal * 3
        );
      } else if (percentage >= 34 && percentage <= 66) {
        // second gradient (between 2nd and 3rd slide)
        setColor(
          SLIDE_COLORS_RGB[1],
          SLIDE_COLORS_RGB[2],
          (percentageDecimal - 0.33) * 3
        );
      } else {
        // third gradient (between 3rd and 4th slide)
        setColor(
          SLIDE_COLORS_RGB[2],
          SLIDE_COLORS_RGB[3],
          (percentageDecimal - 0.66) * 3
        );
      }
    };
    s();
    document.addEventListener("scroll", s);
    return () => {
      document.removeEventListener("scroll", s);
    };
  }, [heroWrapperRef, featuresWrapperRef]);

  return (
    <>
      <Header />

      <main>
        {/* Landing page hero */}
        <div className="section hero" id="hero" ref={heroWrapperRef}>
          {/* Hero Content */}
          <div className="hero-content-wrapper">
            {/* Tags */}
            <div className="tags">
              <div className="tag-wrapper">open source</div>
              <div className="tag-wrapper secondary">holochain framework</div>
              <div className="tag-wrapper tertiary">project management</div>
            </div>
            <h1 className="heading non-tablet">
              Project management
              <br />
              redefined for
              <br />
              distributed teams
            </h1>

            <h1 className="heading tablet">
              Peer-to-Peer Agile Project Management For Software Teams
            </h1>

            <p>
              Agile project management made simple.
              <br />
              Open-source. Peer-to-peer. Perfect for remote teams.
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
                href="/#why"
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

        {/* Why Acorn */}
        <div
          id="why"
          ref={featuresWrapperRef}
          className="section why"
          style={{
            backgroundColor: `rgb(${bgColor.join(",")})`,
          }}
        >
          {/* Heading */}
          <div className="section-heading features">
            <h2>What's special about Acorn</h2>
            <p>
              Acorn is not your typical project management tool. Here are a few
              reasons why. 👇
            </p>
          </div>

          {/* Acorn Features */}
          <div className="about-acorn-features-wrapper">
            {/* Acorn Feature 1 */}
            <FeatureSlide
              // isActive={activeSlide === ActiveSlide.Feature1}
              slideNumber="1"
              title="Truly distributed collaboration"
              description={
                <p>
                  Acorn is built as a{" "}
                  <a href="https://www.holochain.org/" target="_blank">
                    Holochain
                  </a>{" "}
                  application, meaning it runs on decentralized peer-to-peer
                  computing letting you manage projects without needing any
                  servers or external hosting.
                </p>
              }
              buttonLink="https://www.holochain.org/"
              visual={FeatureVisualOne}
              className="feature-slide-1"
            />
            {/* Acorn Feature 2 */}
            <FeatureSlide
              // isActive={activeSlide === ActiveSlide.Feature2}
              slideNumber="2"
              title="Intended Outcomes, not goals"
              description="Acorn simplifies project tracking with outcome-based management and a cyclical process, perfect for keeping distributed teams on the same page."
              buttonLink="https://docs.acorn.software/about-acorn/the-ontology-of-acorn"
              visual={FeatureVisualTwo}
              className="feature-slide-2"
            />
            {/* Acorn Feature 3 */}
            <FeatureSlide
              // isActive={activeSlide === ActiveSlide.Feature3}
              slideNumber="3"
              title="Smarter project management with Acorn"
              description="Acorn provides the sweet-spot combination of annotated and
                computed metadata to easily understand your project's details, make estimates accurately, and check your whole project's progress at a glance."
              buttonLink="https://docs.acorn.software/about-acorn/the-ontology-of-acorn#outcome-scope"
              visual={FeatureVisualThree}
              className="feature-slide-3"
            />

            {/* Acorn Feature 4 */}
            <div ref={feature4ref}>
              <FeatureSlide
                // isActive={activeSlide === ActiveSlide.Feature4}
                slideNumber="4"
                title="See your project your way"
                description={
                  <p>
                    Acorn comes with different project views to match your
                    focus. Use{" "}
                    <a
                      href="https://docs.acorn.software/project-views/map-view"
                      target="_blank"
                    >
                      Map View
                    </a>{" "}
                    for a big-picture outlook,{" "}
                    <a
                      href="https://docs.acorn.software/project-views/table-view"
                      target="_blank"
                    >
                      Table View
                    </a>{" "}
                    to zero in on tasks, and{" "}
                    <a
                      href="https://docs.acorn.software/project-views/high-priority-view"
                      target="_blank"
                    >
                      Priority View
                    </a>{" "}
                    to keep your team aligned.
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
        </div>

        {/* Who Section */}
        <div className="section who" id="who" ref={featuresEndWrapperRef}>
          <div className="who-content-wrapper">
            <h2>Who's Involved in Developing Acorn</h2>
            <p>
              Acorn was envisioned and prototyped (using a third party platform)
              by the{" "}
              <a href="https://holochain.org" target="_blank">
                Holochain
              </a>{" "}
              core development team in 2018 to organize their own planning and
              execution process.
            </p>
            <p>
              In August 2019{" "}
              <a href="https://sprillow.com" target="_blank">
                Sprillow
              </a>{" "}
              undertook a design process, began building Acorn on Holochain and
              in June 2022 the first major release of Acorn (Alpha) was
              published.
            </p>
            <p>
              <a href="https://lightningrodlabs.org" target="_blank">
                Lightningrod Labs
              </a>{" "}
              is the container for the continuous development of Acorn alongside
              other projects powered by Holochain.
            </p>

            <Button
              text="Download Acorn Alpha"
              green
              arrowIcon
              href="/#download"
              onClick={scrollToSection}
            />
          </div>

          <div className="who-visual-wrapper"></div>
        </div>
        {/* Download Section */}
        <div className="section download" id="download">
          <h2>Download the latest Acorn alpha release</h2>
          <p>
            Available as native desktop app for macOS, Windows and Linux. <br />{" "}
            Download and install the latest version of Acorn's alpha release (11.3.2) to
            get started.
          </p>
          <div className="buttons-row three row">
            <div className="column">
              <Button
                text="Download for macOS (Apple Silicon)"
                visualIcon={<DownloadMac />}
                withBackground
                maxWidth="300px"
                margin="4px"
                height="70px"
                lineHeight="1.2"
                title="https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2-arm64.dmg"
                onClick={() => {
                  window.open(
                    "https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2-arm64.dmg",
                    "_blank"
                  );
                }}
              />
              <Button
                text="Download for macOS (Intel)"
                visualIcon={<DownloadMac />}
                withBackground
                maxWidth="300px"
                margin="4px"
                height="70px"
                lineHeight="1.2"
                title="https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2-x64.dmg"
                onClick={() => {
                  window.open(
                    "https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2-x64.dmg",
                    "_blank"
                  );
                }}
              />
            </div>
            <div className="column" style={{ margin: "0 20px" }}>
              <Button
                text="Download for Linux (.deb)"
                visualIcon={<DownloadLinux />}
                withBackground
                maxWidth="300px"
                margin="4px"
                height="70px"
                lineHeight="1.2"
                title="https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn_11.3.2_amd64.deb"
                onClick={() => {
                  window.open(
                    "https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn_11.3.2_amd64.deb",
                    "_blank"
                  );
                }}
              />
              <Button
                text="Download for Linux (AppImage)"
                visualIcon={<DownloadLinux />}
                withBackground
                maxWidth="300px"
                margin="4px"
                height="70px"
                lineHeight="1.2"
                title="https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2.AppImage"
                onClick={() => {
                  window.open(
                    "https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2.AppImage",
                    "_blank"
                  );
                }}
              />
            </div>
            <div className="column">
              <Button
                text="Download for Windows"
                visualIcon={<DownloadWindows />}
                withBackground
                maxHeight="90px"
                margin="4px"
                height="70px"
                lineHeight="1.2"
                title="https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2-setup.exe"
                onClick={() => {
                  window.open(
                    "https://github.com/lightningrodlabs/acorn-desktop/releases/download/v11.3.2/org.lightningrodlabs.acorn-11.3.2-setup.exe",
                    "_blank"
                  );
                }}
              />
            </div>
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
