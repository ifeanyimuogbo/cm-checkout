import {down} from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2% 10% 80% 4%;

  grid-gap: 1%;
  ${down('sm')} {
    background: #eceded;
    margin-bottom: 10px;
    grid-template-columns: 35% 62%;
    grid-gap: 3%;
    align-items: end;
  }
  .product__check {
    ${down('sm')} {
      display: none;
    }
  }
  .product__img {
    ${down('sm')} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      max-width: 100%;
    }
    .float_buttons {
      display: none;
      ${down('sm')} {
        display: block;
      }
      .btn__group {
        display: flex;
        border: 1px solid #cecede;
        border-radius: 10px;
        width: fit-content;
        .left {
          border-right: 1px solid #cecede;
          padding: 8px 12px;
        }
        .count {
          padding: 8px 12px;
          background: #ffffff;
          color: #248197;
        }
        .right {
          border-left: 1px solid #cecede;
          padding: 8px 12px;
        }
      }
    }
  }
  .product__cost {
    ${down('sm')} {
      display: none;
    }
    align-self: start;
    p {
      font-weight: 700;
      padding-top: 20px;
      font-size: 18px;
    }
  }
  .product__info {
    .mobile-price-div {
      display: none;
      ${down('sm')} {
        display: flex;
        align-items: center;
        p {
          font-weight: 700;
          font-size: 28px;
        }
        img {
          max-height: 15px;
        }
      }
    }
    h4 {
      font-weight: 500;
      margin-bottom: 10px;
      ${down('sm')} {
        font-size: 18px;
        font-weight: 400;
      }
    }
    p.item__condition {
    }
    p.item__instock {
      color: #2d872c;
      &.red {
        color: #bc4937;
      }
    }
    p.shipment__info {
      color: #4b4f4f;
      span {
        color: #248197;
      }
    }
    img {
      max-width: 50px;
      ${down('sm')} {
        display: none;
      }
    }
    div.indicate__gift {
      display: flex;
      a {
        color: #4990a0;
      }
      ${down('sm')} {
        display: none;
      }
    }
    div.info__footer {
      display: flex;
      select {
        border-radius: 8px;
        background: #eceded;
        cursor: pointer;
        ${down('sm')} {
          display: none;
        }
      }
      div.footer__option {
        padding: 4px 10px;
        border-left: 1px solid #eceded;
        color: #4990a0;
        cursor: pointer;
        ${down('sm')} {
          display: none;
        }
      }
      div.footer__options__mobile {
        display: none;
        ${down('sm')} {
          display: flex;
          button {
            padding: 8px 12px;
          }
        }
      }
    }
  }
  border-bottom: 1px solid #eceded;
  padding: 20px;
  align-items: center;
`;
