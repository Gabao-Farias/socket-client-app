import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import {
  breakpoints,
  colors,
  fontSizes,
  GlobalStyle,
  radius,
  spacings,
  typography,
} from '~/utils';

type ThemeData = {
  theme: AppTheme;
  themeChoice: ColorThemeDefaultOptions;
  handleChangeThemeChoice(choice: ColorThemeDefaultOptions): void;
};

export const ThemeContext = createContext<ThemeData>({} as ThemeData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeChoice, setThemeChoice] = useState<ColorThemeDefaultOptions>(
    'light',
  );
  const [theme, setTheme] = useState<AppTheme>({
    breakpoints,
    colors: colors.light,
    fontSizes,
    radius,
    spacings,
    typography,
  });

  const handleChangeThemeChoice = (choice: ColorThemeDefaultOptions) => {
    setThemeChoice(choice);
    setTheme({ ...theme, colors: colors[choice] });
  };

  return (
    <ThemeContext.Provider
      value={{ handleChangeThemeChoice, theme, themeChoice }}
    >
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
