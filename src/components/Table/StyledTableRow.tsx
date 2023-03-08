import styled from "styled-components";

import { size } from "../../utils/responsive";

const StyledTableRow = styled.tr.attrs(
  (props: {
    isSelected: boolean;
    isHeaderRow: boolean;
    theme: { colors: any };
    title?: string;
  }) => ({
    isSelected: props.isSelected,
    isHeaderRow: props.isHeaderRow,
    theme: props.theme,
    title: props.title,
  })
)<{
  isSelected: boolean;
  isHeaderRow: boolean;
  title: string;
  theme: { colors: any };
}>`
  @media (min-width: ${size.xs}) and (max-width: ${size.md}) {
    display: ${(props) => (props.isHeaderRow ? "none" : "grid")};
    display: grid;
    grid-template-rows: repeat(4, minmax(0, 1fr));
    grid-template-columns: repeat(8, minmax(0, 1fr));
    position: relative;

    &:after {
      content: "";
      display: block;
      width: calc(100% - 32px);
      height: 2px;
      background-color: ${(props) => props.theme.colors.modeBorder};
      position: absolute;
      bottom: -1px;
      left: 16px;
    }

    &:last-child:after {
      display: none;
    }

    ${(props) =>
      props.isHeaderRow
        ? `
      grid-template-rows: repeat(1, minmax(0, 1fr));
      grid-template-columns: repeat(1, minmax(0, 1fr));
      & > th {
        display: none;
        &:first-child {
          display: block;
          &:before { 
            content: "${props.title}";
            font-family: "Avenir Heavy";
            display: block;
          }
        }
      }
    `
        : ``};
  }

  td {
    background-color: ${(props) =>
      props.isSelected
        ? props.theme.colors.themeLighter
        : props.theme.colors.white};
  }
`;

export default StyledTableRow;
