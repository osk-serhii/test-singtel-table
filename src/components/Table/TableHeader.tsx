import styled from "styled-components";

import { device } from "../../utils/responsive";
import StyledTableRow from "./StyledTableRow";

interface TableHeaderProps {
  title: string;
  select?: "radio" | "checkbox" | null;
  columns: any[];
  sort: { key: string; direction: string };
  onSort: (key: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  select,
  columns,
  sort,
  onSort,
}) => {
  return (
    <thead>
      <StyledTableRow isHeaderRow title={title}>
        {(select === "radio" || select === "checkbox") && (
          <StyledTh key={select}></StyledTh>
        )}
        {columns.map((column, index) => (
          <StyledTh key={`${column.label}_${index}`}>
            {column.label}

            {column.sort && (
              <StyledSortContainer
                onClick={() => onSort(`${column.dataKey}___${index}`)}
              >
                <StyledSortIcon
                  src={`/icons/sort-${
                    sort.key === `${column.dataKey}___${index}`
                      ? sort.direction
                      : "none"
                  }.png`}
                  alt="sort"
                />
              </StyledSortContainer>
            )}
          </StyledTh>
        ))}
      </StyledTableRow>
    </thead>
  );
};

export default TableHeader;

// ========== Start styled-components ===========
const StyledTh = styled.th(
  ({ theme: { colors } }) => `
    padding: 12px 24px;
    background-color: ${colors.modeDark};
    border: 0px;
    font-family: "Avenir Heavy", sans-serif;
    line-height: 1.75;
    letter-spacing: 0;
    text-align: left;

    @media ${device.sm} {
      font-size: 16px;
    }
    @media ${device.md} {
      font-size: 18px;
    }
    @media ${device.lg} {
      font-size: 24px;
    }
`
);

const StyledSortContainer = styled.div(
  ({ theme: { colors } }) => `
    display: inline-flex;
    width: 56px;
    height: 56px;
    margin-left: 10px;
    border-radius: 100%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-color: ${colors.modeMain};

    &:hover {
      background-color: ${colors.themeLight};
    }
`
);
const StyledSortIcon = styled.img`
  height: 14.67px;
`;
// ========== End styled-components ===========
