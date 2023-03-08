import { useState, useEffect } from "react";
import styled from "styled-components";

import { device } from "../../utils/responsive";
import ErrorBoundary from "../ErrorBoundary";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
  columns: any[];
  data: any[];
  select?: "radio" | "checkbox" | null;
  title?: string;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  select = null,
  title = "",
}) => {
  const getInitialSort = () => {
    let returnVal = {
      key: "",
      direction: "asc",
    };
    for (const index in columns) {
      if (columns[index].sort) {
        returnVal = {
          key: `${columns[index].dataKey}___${index}`,
          direction: columns[index].sort,
        };
      }
    }
    return returnVal;
  };

  const [sort, setSort] = useState(getInitialSort());

  useEffect(() => {
    setSort(getInitialSort());
  }, [columns]);

  const onSort = (sortKey: string) => {
    setSort((prev) => ({
      key: sortKey,
      direction:
        prev.key === sortKey
          ? prev.direction === "asc"
            ? "desc"
            : "asc"
          : "asc",
    }));
  };

  return (
    <ErrorBoundary>
      <StyledTable>
        <TableHeader
          title={title}
          select={select}
          columns={columns}
          sort={sort}
          onSort={onSort}
        />

        <TableBody columns={columns} data={data} select={select} sort={sort} />
      </StyledTable>
    </ErrorBoundary>
  );
};

export default Table;

// ========== Start styled-components ===========
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.12));
  border-spacing: 0;
  border-radius: 8px;

  @media ${device.md} {
    border-radius: 16px;
  }
`;
// ========== End styled-components ===========
