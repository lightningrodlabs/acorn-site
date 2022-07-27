import React from "react";
import Button from "../Button/Button";

export type FeatureSlideProps = {
  title: string;
  description: string;
  ref: any;
  isActive: boolean;
  visual: string;
  framedVisual?: boolean;
};

const FeatureSlide: React.FC<FeatureSlideProps> = ({
  title,
  description,
  visual,
  isActive,
  ref,
  framedVisual,
}) => {
  return (
    <>
      <CSSTransition
        in={isActive}
        timeout={100}
        classNames="about-acorn-feature-animation"
      >
        <div className="about-acorn-feature-wrapper" ref={ref}>
          {/* Feature Content */}

          <div className="acorn-feature-content-wrapper">
            <h2>{title}</h2>
            <p>{description}</p>
            <Button text="Learn more" arrowIcon />
          </div>
          {/* Feature Visual */}
          <div className="acorn-feature-visual-wrapper">
            <img
              className={`feature-visual ${framedVisual ? "framed" : ""}`}
              src={visual}
              alt={`Acorn Feature Visual for ${title}`}
            />
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default FeatureSlide;
