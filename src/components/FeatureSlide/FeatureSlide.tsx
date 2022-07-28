import React, { useState } from "react";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";

import "./FeatureSlide.scss";

export type FeatureSlideProps = {
  isActive: boolean;
  title: string;
  description: string;
  visual?: string;
  isFramedVisual?: boolean;
  buttonLink?: string;
  tabbedVisuals?: boolean;
  tabTitle1?: string;
  tabTitle2?: string;
  tabTitle3?: string;
  tabVisual1?: string;
  tabVisual2?: string;
  tabVisual3?: string;
  className?: string;
};

enum ActiveTab {
  Tab1,
  Tab2,
  Tab3,
}

const FeatureSlide: React.FC<FeatureSlideProps> = ({
  isActive,
  title,
  description,
  visual,
  buttonLink,
  isFramedVisual,
  tabbedVisuals,
  tabTitle1,
  tabTitle2,
  tabTitle3,
  tabVisual1,
  tabVisual2,
  tabVisual3,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(ActiveTab.Tab1);

  return (
    <CSSTransition
      appear
      in={isActive}
      timeout={100}
      classNames="about-acorn-feature-animation"
    >
      <div className={`about-acorn-feature-wrapper ${className}`}>
        {/* Feature Content */}

        <div className="acorn-feature-content-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
          {buttonLink && (
            <a href={buttonLink} target="_blank" className="acorn-feature-link">
              <Button text="Learn more" externalLinkIcon />
            </a>
          )}
        </div>
        {/* If tabbed visuals */}
        {tabbedVisuals && (
          <div className="acorn-feature-visual-wrapper">
            <div className="acorn-feature-visual-tabs">
              {/* Tab 1 */}
              <div
                className={`acorn-feature-visual-tab-item ${
                  activeTab === ActiveTab.Tab1 ? "active" : ""
                }`}
                onClick={() => setActiveTab(ActiveTab.Tab1)}
              >
                {tabTitle1}
              </div>
              {/* Tab 2 */}
              <div
                className={`acorn-feature-visual-tab-item ${
                  activeTab === ActiveTab.Tab2 ? "active" : ""
                }`}
                onClick={() => setActiveTab(ActiveTab.Tab2)}
              >
                {tabTitle2}
              </div>
              {/* Tab 3 */}
              <div
                className={`acorn-feature-visual-tab-item ${
                  activeTab === ActiveTab.Tab3 ? "active" : ""
                }`}
                onClick={() => setActiveTab(ActiveTab.Tab3)}
              >
                {tabTitle3}
              </div>
            </div>

            <img
              className={`feature-visual ${isFramedVisual ? "framed" : ""}`}
              src={
                activeTab === ActiveTab.Tab1
                  ? tabVisual1
                  : activeTab === ActiveTab.Tab2
                  ? tabVisual2
                  : tabVisual3
              }
              alt={`Acorn Feature Visual for ${title}`}
            />
          </div>
        )}
        {/* If single visual */}
        {visual && !tabbedVisuals && (
          <div className="acorn-feature-visual-wrapper">
            <img
              className={`feature-visual ${isFramedVisual ? "framed" : ""}`}
              src={visual}
              alt={`Acorn Feature Visual for ${title}`}
            />
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default FeatureSlide;
