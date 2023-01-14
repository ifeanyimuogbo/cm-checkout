import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 37% 60%;
  grid-gap: 3%;
  align-items: center;
  .item__img {
    img {
      max-width: 100%;
    }
  }
  .item__info {
    h5 {
      color: #54a0ae;
      margin-bottom: 8px;
    }
    .ratings {
      display: flex;
      align-items: center;
      span.rnum {
        font-size: 14px;
        color: #54a0ae;
        font-weight: 500;
      }
      .react-stars span {
        font-size: 16px !important;
      }
    }
  }
  .item__price {
    color: #c5514f;
  }
  button {
    padding: 4px 10px;
    border-radius: 15px;
  }
`;
