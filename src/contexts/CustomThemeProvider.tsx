import { createContext, useState } from "react";

interface ICustomThemeContext {
  isDark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  isDark: false,
};

export const CustomThemeContext =
  createContext<ICustomThemeContext>(defaultState);

interface ThemeProviderProps {
  children: React.ReactNode;
}
const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setDark] = useState(defaultState.isDark);

  const toggleDark = () => {
    setDark(!isDark);
  };

  return (
    <CustomThemeContext.Provider
      value={{
        isDark,
        toggleDark,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
