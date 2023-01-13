import { down, up } from "styled-breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  ${up("sm")} {
    padding: 10px 40px 40px 40px;
    background: #eceded;
    display: grid;
    grid-template-columns: 75% 20%;
    grid-gap: 3%;
  }
`;
export const MainWrapper = styled.div`
  background: #ffffff;
  padding: 20px 10px 10px 10px;
  ${down("sm")} {
    order: 2;
  }
`;
export const SideWrapper = styled.div`
  ${down("sm")} {
    order: 1;
  }
`;
