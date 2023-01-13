import { css, keyframes } from "styled-components";
import { switchProp } from "styled-tools";
import { getColorFromTheme } from "../../../utils/style-utils";

const loadingAnimation = keyframes`
  0% {
    width: 0;
    transform: translateX(0);
    border-radius: 10px 0 0 10px;
  }

  25% {
    width: 100%;
    transform: translateX(0);
    border-radius: 10px 0 0 10px;
  }

  50% {
    width: 100%;
    transform: translateX(100%);
    border-radius: 0 10px 10px 0;
  }

  75% {
    width: 100%;
    transform: translateX(0%);
    border-radius: 0 10px 10px 0;
  }

  100% {
    width: 0;
    transform: translateX(0%);
    border-radius: 10px 0 0 10px;
  }
`;

const baseLoadingStyle = css`
  cursor: not-allowed !important;

  &::after {
    display: block;
    position: absolute;
    content: "";
    width: 0%;
    top: 0;
    height: 100%;
    left: 0;
    z-index: -1;
    animation: ${loadingAnimation} 7000ms infinite linear;
  }
`;

const primaryLoadingStyle = css`
  &:not(:disabled):hover {
    color: ${getColorFromTheme("white")};
    background-color: ${getColorFromTheme("yellow100")};
  }

  &::after {
    background-color: ${getColorFromTheme("warmBlue")};
  }
`;

const secondaryLoadingStyle = css`
  &:not(:disabled):hover {
    background-color: ${getColorFromTheme("white")};
    color: ${getColorFromTheme("yellow100")};
  }

  &::after {
    background-color: ${getColorFromTheme("yellow100")};
  }
`;

export const loadingStyle = css`
  ${baseLoadingStyle};

  ${switchProp(
    "kind",
    {
      primary: primaryLoadingStyle,
      secondary: secondaryLoadingStyle,
    },
    primaryLoadingStyle
  )}
`;
