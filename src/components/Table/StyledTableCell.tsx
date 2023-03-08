import styled from "styled-components";

import TableRow from "./StyledTableRow";
import { size, device } from "../../utils/responsive";

const StyledTableCell = styled.td.attrs(
  (props: {
    isSelectColumn: boolean;
    isSelectable: boolean;
    theme: { colors: any };
  }) => ({
    isSelectColumn: props.isSelectColumn,
    isSelectable: props.isSelectable,
    theme: props.theme,
  })
)<{ isSelectColumn: boolean; isSelectable: boolean; theme: { colors: any } }>`
  background-color: ${(props) => props.theme.colors.modeMain};
  border: 0px;
  font-family: "Avenir Book", sans-serif;
  line-height: 1.75;
  letter-spacing: 0.1;
  font-size: 20px;
  text-align: left;
  position: relative;
  padding: 4px 16px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.modeBorder};
    position: absolute;
    bottom: -1px;
    left: 0px;
  }

  &:first-child:after {
    width: calc(100% - 24px);
    left: 24px;
  }
  &:last-child:after {
    width: calc(100% - 24px);
  }

  ${TableRow}:last-child &:after {
    display: none;
  }

  @media ${device.sm} {
    font-size: 16px;
  }
  @media ${device.md} {
    font-size: 18px;
    padding: 24px;
  }
  @media ${device.lg} {
    font-size: 20px;
  }
  @media (min-width: ${size.xs}) and (max-width: ${size.md}) {
    flex-grow: 1;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.002em;
    ${(props) => (!props.isSelectColumn ? "padding-left: 126px;" : "")};

    ${(props) =>
      !props.isSelectColumn
        ? `
      &:before {
        content: attr(data-label);
        display: block;
        position: absolute;
        width: 110px;
        left: 0px;
        font-family: "Avenir Heavy";
      }
    `
        : ""};

    &:after {
      display: none;
    }
    &:first-child {
      ${(props) =>
        props.isSelectable
          ? "grid-row: span 4 / span 4; padding-top: 12px;"
          : ""}
    }
    &:not(:first-child) {
      ${(props) =>
        !props.isSelectColumn
          ? `grid-column: span ${props.isSelectable ? "7" : "8"} / span ${
              props.isSelectable ? "7" : "8"
            };`
          : ""}
    }
  }
`;

export default StyledTableCell;
