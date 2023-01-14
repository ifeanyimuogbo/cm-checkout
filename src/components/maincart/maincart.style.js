import {down} from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .header {
    ${down('sm')} {
      display: none;
    }
    h1.header__title {
      font-weight: 400;
      margin-bottom: 5px;
    }
    p.deselect__prompt {
      color: #54a0ae;
      cursor: pointer;
      font-size: 14px;
    }
    p.price {
      text-align: right;
      color: #c1c2c2;
      font-size: 13px;
    }
    border-bottom: 1px solid #eceded;
  }
  .secondary__header {
    ${down('sm')} {
      display: none;
    }
    p.saved__prompt {
      font-size: 14px;
      span {
        color: #54a0ae;
        font-size: 16px;
      }
    }
    padding: 20px;
    border-bottom: 1px solid #eceded;
  }
  .footer {
    padding: 10px;
    text-align: right;
    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
