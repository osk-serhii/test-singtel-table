import { useContext } from "react";
import styled from "styled-components";

import { CustomThemeContext } from "../contexts/CustomThemeProvider";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleDark } = useContext(CustomThemeContext);
  return (
    <StyledContainer>
      <StyledButton onClick={toggleDark}>
        Toggle to {isDark ? "Light" : "Dark"} Theme
      </StyledButton>
    </StyledContainer>
  );
};

export default ThemeToggle;

// ========== Start styled components ==========
const StyledContainer = styled.div`
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  padding: 8px 20px;
  margin-right: 20px;
`;
// ========== End styled components ==========
