import styled from 'styled-components';
import {ifProp} from 'styled-tools';
import styledMap from 'styled-map';
import {appearance, textStyle} from './appearance';
import {loadingStyle} from './loading';
import {width} from './width';
import {Link} from 'react-router-dom';
import {getColorFromTheme} from '../../../utils/style-utils';

export const cursorValue = styledMap`
  disabled: initial;
  default: pointer;
`;

export const pointerEvents = styledMap`
  disabled: none;
  default: initial;
`;

export const Button = styled.button`
  cursor: ${cursorValue};
  outline: none;
  border-radius: 10px;
  padding: 8px 28px;
  pointer-events: ${pointerEvents};
   position: relative;
  transition: 200ms all ease-in-out;
  border: 1px solid;
  border-color: transparent;
  line-height: unset;
  z-index: 1;
  white-space: nowrap;
  ${appearance};
  ${width};
  ${textStyle};
  ${ifProp('isLoading', loadingStyle)}
  overflow-x: hidden;
  &:disabled {
    color: ${({isLoading}) =>
      isLoading ? getColorFromTheme('black') : undefined};
  }
    background-color: ${({isLoading}) =>
      isLoading ? getColorFromTheme('yellow100') : undefined};
  }

  }
`;

export const LinkButton = styled(Link)`
  cursor: ${cursorValue};
  outline: none;
  border-radius: 10px;
  padding: 16px 28px;
  pointer-events: ${pointerEvents};
  position: relative;
  transition: 200ms all ease-in-out;
  border: 1px solid;
  border-color: transparent;
  line-height: unset;
  z-index: 1;

  ${appearance};
  ${width};
  ${textStyle};
  ${ifProp('isLoading', loadingStyle)}
  overflow-x: hidden;
`;

export const DisplayNameButton = styled.button`
  cursor: ${cursorValue};
  outline: none;
  border-radius: 10px;
  padding: 16px 28px;
  pointer-events: ${pointerEvents};
  position: relative;
  transition: 200ms all ease-in-out;
  border: 1px solid;
  border-color: transparent;
  line-height: unset;
  z-index: 1;
  border: 1px solid #cecede;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-style: medium;
  ${width};
  ${ifProp('isLoading', loadingStyle)}
  overflow-x: hidden;
`;
