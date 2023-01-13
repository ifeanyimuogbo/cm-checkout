import { css } from "styled-components";
import { switchProp } from "styled-tools";

const fullWidthStyle = css`
  width: 100%;
  text-align: center;
`;

const mdStyle = css`
  padding: 8px 24px;
`;

const smStyle = css`
  padding: 6px 16px;
`;

const xmStyle = css`
  padding: 4px;
`;

export const width = css`
  ${switchProp(
    "width",
    {
      xm: xmStyle,
      sm: smStyle,
      md: mdStyle,
      full: fullWidthStyle,
    },
    mdStyle
  )}
`;
