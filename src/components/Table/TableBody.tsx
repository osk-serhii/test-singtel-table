import { useState, useEffect, ChangeEventHandler } from "react";

import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";
import TableSelectableCell from "./TableSelectableCell";

interface TableBodyProps {
  columns: any[];
  data: any[];
  select?: "radio" | "checkbox" | null;
  sort: { key: string; direction: string };
}

const TableBody: React.FC<TableBodyProps> = ({
  columns,
  data,
  select = null,
  sort,
}) => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  useEffect(() => {
    setTableData(getSortedData());
  }, [data, sort]);

  const getSortedData = () => {
    if (!sort.key) {
      return data;
    } else {
      const sortKey = sort.key.split("___")[0];
      const newTableData = data.sort((a, b) => {
        if (a[sortKey] <= b[sortKey]) {
          return sort.direction === "asc" ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return sort.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
      return newTableData;
    }
  };

  const onRowSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = e.target.value;
    const valueIndex = selectedRows.indexOf(currentValue);
    if (valueIndex === -1) {
      if (select === "radio") {
        setSelectedRows((prev) => [currentValue]);
      } else {
        setSelectedRows((prev) => [...prev, currentValue]);
      }
    } else {
      setSelectedRows((prev) => {
        const newVal = [...prev];
        newVal.splice(valueIndex, 1);
        return newVal;
      });
    }
  };

  return (
    <tbody>
      {tableData.map((row, index) => {
        const isSelected = selectedRows.includes(String(row?.id));
        return (
          <StyledTableRow key={row.id} isSelected={isSelected}>
            <TableSelectableCell
              select={select}
              onRowSelect={onRowSelect}
              selectedRows={selectedRows}
              row={row}
            />

            {columns.map((column, colIndex) => (
              <StyledTableCell
                key={`${column.label}_${colIndex}`}
                data-label={`${column.label}:`}
                isSelectable={Boolean(select)}
              >
                {column.renderCell
                  ? column.renderCell(row[column.dataKey], row, index)
                  : row[column.dataKey]}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        );
      })}
    </tbody>
  );
};

export default TableBody;
