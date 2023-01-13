import styled from "styled-components";

export const HorizontalSpacer = styled.div`
  width: ${({ size }) => size};
  display: inline-block;
`;

export const VerticalSpacer = styled.div`
  height: ${({ size }) => size};
  display: block;
`;
export const HorizontalSideRule = styled.div`
  border-left: 1px solid
    ${({ color }) => (color ? color : "rgba(237, 237, 242, 1)")};
  height: ${({ size }) => size};
  margin: 0px 5px;
`;
