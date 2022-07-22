import React from "react";

import "./Button.scss";

// import ExternalLink from "../../svgs/external-link.svg";
import ArrowRight from "../../svgs/arrow-right.svg";
import ArrowRightGreen from "../../svgs/arrow-right-green.svg";

export type ButtonProps = {
  text: string;
  green?: boolean;
  externalLinkIcon?: boolean;
  arrowIcon?: boolean;
  semiTransparent?: boolean;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  green,
  externalLinkIcon,
  arrowIcon,
  semiTransparent,
  onClick = () => {},
  href,
}) => {
  return (
    <button
      className={`button-wrapper ${green ? "green" : ""} ${semiTransparent ? "semi-transparent" : ""}`}
      onClick={onClick}
      data-href={href}
    >
      {text}
      {!green && arrowIcon && <ArrowRight />}
      {green && arrowIcon && <ArrowRightGreen />}
      {/* {externalLinkIcon && <ExternalLink />} */}
    </button>
  );
};

export default Button;
