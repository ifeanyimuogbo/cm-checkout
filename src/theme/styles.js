import { ifProp } from "styled-tools";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => (flexDir ? flexDir : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "no-wrap")};
  ${ifProp(
    "sm",
    css`
      ${down("sm")} {
        flex-direction: column;
      }
    `
  )}
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns ? gridTemplateColumns : ""};
  grid-template-rows: ${({ gridTemplateRows }) =>
    gridTemplateRows ? gridTemplateRows : ""};
  grid-gap: ${({ gap }) => (gap ? gap : "")};
  ${ifProp(
    "sm",
    css`
      ${down("md")} {
        display: flex;
        margin: 0 12%;

        flex-direction: column;
      }
    `
  )}
`;
