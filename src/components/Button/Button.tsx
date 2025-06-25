import React from "react";

import "./Button.scss";

import ExternalLink from "../../svgs/external-link.svg";
import ArrowRight from "../../svgs/arrow-right.svg";
import ArrowRightGreen from "../../svgs/arrow-right-green.svg";

export type ButtonProps = {
  text: string;
  green?: boolean;
  withBackground?: boolean;
  visualIcon?: React.ReactElement;
  arrowIcon?: boolean;
  externalLinkIcon?: boolean;
  semiTransparent?: boolean;
  onClick?: () => void;
  href?: string;
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
  height?: string;
  margin?: string;
  lineHeight: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  green,
  visualIcon,
  withBackground,
  arrowIcon,
  externalLinkIcon,
  onClick = () => {},
  title,
  href,
  maxWidth,
  maxHeight,
  height,
  margin,
  lineHeight,
}) => {
  return (
    <button
      title={title}
      className={`button-wrapper ${green ? "green" : ""} ${
        withBackground ? "with-background" : ""
      } ${externalLinkIcon ? "with-external-link" : ""}`}
      onClick={onClick}
      data-href={href}
      style={{
        maxWidth: maxWidth ? maxWidth : "",
        maxHeight: maxHeight ? maxHeight : "",
        height: height ? height : "",
        margin: margin ? margin : "",
        lineHeight: lineHeight ? lineHeight : "",
      }}
    >
      {visualIcon && <span className="visual-icon">{visualIcon}</span>}
      {text}
      {!green && arrowIcon && (
        <span className="arrow-icon">
          <ArrowRight />
        </span>
      )}
      {green && arrowIcon && (
        <span className="arrow-icon">
          <ArrowRightGreen />
        </span>
      )}
      {externalLinkIcon && (
        <span className="external-link-icon">
          <ExternalLink />
        </span>
      )}
      {/* {externalLinkIcon && <ExternalLink />} */}
    </button>
  );
};

export default Button;
