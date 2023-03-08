import styled from "styled-components";

import Table from "../components/Table";
import ThemeToggle from "../components/ThemeToggle";

const TableTest: React.FC = () => {
  return (
    <StyledTableContainer>
      <ThemeToggle />

      <Table
        select="checkbox"
        title="Contact details"
        data={[
          {
            id: 1,
            name: "Mavis Chen",
            mobile: "8899 7654",
            expiry: "Dec 2022",
            penalty: "600",
          },
          {
            id: 2,
            name: "Rodney Artichoke",
            mobile: "8899 7676",
            expiry: "Nov 2022",
            penalty: "1200",
          },
          {
            id: 3,
            name: "Valentino Morose",
            mobile: "1234 9829",
            expiry: "Oct 2022",
            penalty: "180",
          },
          {
            id: 4,
            name: "Jone Doe",
            mobile: "9876 0261",
            expiry: "Jan 2023",
            penalty: "2900",
          },
          {
            id: 5,
            name: "Eric Widget",
            mobile: "9876 0261",
            expiry: "Mar 2023",
            penalty: "58",
          },
        ]}
        columns={[
          {
            label: "Name",
            dataKey: "name",
            sort: "asc",
          },
          {
            label: "Mobile",
            dataKey: "mobile",
            renderCell: (mobile: number) => {
              return <a href={`tel:${mobile}`}>{mobile}</a>;
            },
          },
          {
            label: "Expiry",
            dataKey: "expiry",
          },
          {
            label: "Penalty",
            dataKey: "penalty",
            renderCell: (penalty: number) => {
              return `$${penalty}`;
            },
          },
        ]}
      />
    </StyledTableContainer>
  );
};

export default TableTest;

// ========== Start styled components ==========
const StyledTableContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
`;
// ========== End styled components ==========
