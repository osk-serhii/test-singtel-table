import { ChangeEventHandler } from "react";
import styled from "styled-components";

import { device } from "../../utils/responsive";
import TableCell from "./StyledTableCell";

interface TableSelectableCellProps {
  select?: "radio" | "checkbox" | null;
  onRowSelect: ChangeEventHandler<HTMLInputElement>;
  selectedRows: string[];
  row: any;
}

const TableSelectableCell: React.FC<TableSelectableCellProps> = ({
  select,
  row,
  onRowSelect,
  selectedRows,
}) => {
  if (select === "radio") {
    return (
      <TableCell key={`radio`} isSelectColumn isSelectable={Boolean(select)}>
        <StyledInputRadio
          type={`radio`}
          name="custom-table-row-select-radio"
          onChange={onRowSelect}
          value={row?.id}
          checked={selectedRows.includes(String(row?.id))}
        />
      </TableCell>
    );
  }

  if (select === "checkbox") {
    return (
      <TableCell key={`checkbox`} isSelectColumn isSelectable={Boolean(select)}>
        <StyledInputCheckbox
          type={`checkbox`}
          name="custom-table-row-select-checkbox"
          value={row?.id}
          checked={selectedRows.includes(String(row?.id))}
          onChange={onRowSelect}
        />
      </TableCell>
    );
  }

  return null;
};

export default TableSelectableCell;

// ========== Start styled-components ===========
const StyledInputRadio = styled.input(
  ({ theme: { colors } }) => `
    height: 24px;
    width: 24px;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid ${colors.modeNeutral};
    background-color: ${colors.modeMain};
    border-radius: 50%;

    &:focus-visible {
      outline-offset: 0;
    }

    &:checked {
      background-color: ${colors.modeMain};
      border: 8px solid ${colors.themeDark};
    }

    @media ${device.md} {
      height: 32px;
      width: 32px;
    }
  `
);
const StyledInputCheckbox = styled.input(
  ({ theme: { colors } }) => `
    height: 24px;
    width: 24px;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${colors.modeMain};
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid ${colors.modeNeutral};
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &:checked {
      background-color: ${colors.themeDark};
      border: 1px solid ${colors.themeDark};
    }

    &:before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${colors.modeMain};
      background-color: CanvasText;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
    &:checked:before {
      transform: scale(1);
    }

    @media ${device.md} {
      height: 32px;
      width: 32px;
      border-radius: 8px;
    }
  `
);
// ========== End styled-components ===========
