import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './global';
import {theme} from './theme';
import PropTypes from 'prop-types';

export const StyleProvider = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
StyleProvider.propTypes = {
  children: PropTypes.elementType,
};
