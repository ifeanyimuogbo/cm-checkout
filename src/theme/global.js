import { up } from "styled-breakpoints";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { getColorFromTheme } from "../utils/style-utils";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${reset}

  body {
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0;
    padding: 0; 
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    height: 100%;
    ${up("sm")} {
      background: #eceded;
    }
  }

  html {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a:focus:not(.focus-visible),
  *:focus {
    outline: none;
    box-shadow: none;
  }

  a.focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${getColorFromTheme("yellow100")};
  }
`;
