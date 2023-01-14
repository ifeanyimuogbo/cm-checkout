import {css} from 'styled-components';
import {switchProp} from 'styled-tools';
import {getColorFromTheme} from '../../../utils/style-utils';

export const disabled = css`
  &:disabled {
    cursor: not-allowed;
    pointer-events: auto;
  }
`;

const primaryStyle = css`
  color: #100e13;
  background-color: ${getColorFromTheme('yellow100')};

  &:not(:disabled):hover {
    background-color: ${getColorFromTheme('yellow100')};
  }

  &:not(:disabled):focus {
    border-color: ${getColorFromTheme('yellow100')};
    box-shadow: ${getColorFromTheme('yellow100')} 0 0 0 4px;
  }

  &:disabled {
    background-color: ${getColorFromTheme('backgroundLight')};
    color: ${getColorFromTheme('textBody')};
  }

  ${disabled};
`;

const secondaryStyle = css`
  color: ${getColorFromTheme('textDark')};
  background-color: ${getColorFromTheme('white')};
  border-color: ${getColorFromTheme('borderDark')};

  &:not(:disabled):hover {
    border-color: ${getColorFromTheme('yellow100')};
    color: ${getColorFromTheme('yellow100')};
  }

  &:not(:disabled):focus {
    border-color: ${getColorFromTheme('borderDark')};
    box-shadow: ${getColorFromTheme('yellow100')} 0 0 0 4px;
  }

  &:disabled {
    color: ${getColorFromTheme('textMuted')};
  }

  ${disabled};
`;

const smallStyle = css`
  padding: none;
  color: ${getColorFromTheme('yellow100')};
  background: none !important;
  border: none !important;

  &:not(:disabled):hover {
    color: ${getColorFromTheme('yellow100')};
    text-decoration: underline;
  }

  ${disabled};
`;

const smallBlackStyle = css`
  padding: none;
  color: ${getColorFromTheme('textBody')};
  background: none !important;
  border: none !important;

  &:not(:disabled):hover {
    color: ${getColorFromTheme('textDark')};
    text-decoration: underline;
  }

  ${disabled};
`;

export const appearance = css`
  ${switchProp(
    'kind',
    {
      primary: primaryStyle,
      secondary: secondaryStyle,
      small: smallStyle,
      'small-black': smallBlackStyle,
    },
    primaryStyle,
  )}
`;

export const textStyle = css`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
`;
