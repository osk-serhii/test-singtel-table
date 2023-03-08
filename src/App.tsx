import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import TableTest from "./pages/TableTest";
import { CustomThemeContext } from "./contexts/CustomThemeProvider";
import { theme } from "./utils/theme";

function App() {
  const { isDark } = useContext(CustomThemeContext);
  return (
    <div className="App">
      <ThemeProvider theme={theme[isDark ? "dark" : "light"]}>
        <GlobalStyle />
        <TableTest />
      </ThemeProvider>
    </div>
  );
}

export default App;
