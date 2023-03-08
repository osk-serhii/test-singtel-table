import { ThemeProvider } from 'styled-components';
import { theme as THEMES } from '../src/utils/theme';
import { GlobalStyle } from "../src/GlobalStyle";


export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};