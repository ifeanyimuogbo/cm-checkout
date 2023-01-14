import {forwardRef} from 'react';
import styled from 'styled-components';
import {getColorFromTheme} from '../../../utils/style-utils';
import {checkAppearance, checkIconAppearance} from './style';
import PropTypes from 'prop-types';

const CheckInput = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  ${checkAppearance};
`;

const Wrapper = styled.span`
  padding: 5px;
  overflow: visible;
  text-align: center;
  width: 20px;
  height: 20px;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  vertical-align: middle;
  visibility: visible;
  text-decoration: none;
  background: transparent;
`;

const InnerWrapper = styled.span`
  padding: ${({kind}) =>
    kind === 'import' || kind === 'indeterminate' ? '6px' : '8px'};
  border-radius: 5px;
  border: 2px solid;
  background-color: transparent;
  border-color: ${getColorFromTheme('borderDark')};
  transition: all 300ms ease-in-out;
  vertical-align: text-top;

  &::after {
    transition: all 0.2s ease-in-out;
    content: '';
    display: block;
    ${checkIconAppearance};
    position: absolute;
  }
`;

export const Checkbox = forwardRef(({kind, ...props}, ref) => (
  <Wrapper aria-label="checkbox-input">
    <CheckInput {...props} kind={kind} type="checkbox" ref={ref} />
    <InnerWrapper kind={kind} />
  </Wrapper>
));
Checkbox.displayName = 'CheckBox';
Checkbox.propTypes = {
  kind: PropTypes.any,
};
