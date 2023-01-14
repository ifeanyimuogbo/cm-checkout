import {down} from 'styled-breakpoints';
import styled from 'styled-components';
import {getColorFromTheme} from '../../utils/style-utils';

export const Wrapper = styled.div``;
export const SubtotalBox = styled.div`
  background: #ffffff;
  padding: 20px;
  ${down('sm')} {
    padding-bottom: 0;
  }
  .summary {
    ${down('sm')} {
      font-size: 24px;
      font-size: 600;
    }
    span {
      font-weight: 700;
      font-size: 18px;
      ${down('sm')} {
        font-size: 32px;
      }
    }
  }
  div.indicate__gift {
    display: flex;
    ${down('sm')} {
      display: none;
    }
  }
  button {
    width: 100%;
  }

  .mobile-div-wrapper {
    display: none;
    ${down('sm')} {
      border-top: 1px solid ${getColorFromTheme('yellow100')};
      margin-top: 10px;
      display: flex;
      padding-top: 10px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eceded;
    }
  }
`;
export const HighlyRatedProductsBox = styled.div`
  background: #ffffff;
  padding: 5px 20px 20px 20px;
  border-radius: 8px;
  ${down('sm')} {
    display: none;
  }
`;
