import { ComponentStory, ComponentMeta } from "@storybook/react";

import TableHeader from "./TableHeader";

export default {
  title: "Table/TableHeader",
  component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => (
  <TableHeader {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Basic Table Header",
  select: null,
  columns: [
    {
      label: "Name",
      dataKey: "name",
    },
    {
      label: "Age",
      dataKey: "age",
    },
    {
      label: "Birthday",
      dataKey: "birthday",
    },
    {
      label: "Mobile",
      dataKey: "mobile",
    },
  ],
  sort: { key: "name", direction: "asc" },
  onSort: () => {},
};

export const WithSort = Template.bind({});
WithSort.args = {
  title: "WithSort Table Header",
  select: null,
  columns: [
    {
      label: "Name",
      dataKey: "name",
      sort: "asc",
    },
    {
      label: "Age",
      dataKey: "age",
    },
    {
      label: "Birthday",
      dataKey: "birthday",
      sort: "desc",
    },
    {
      label: "Mobile",
      dataKey: "mobile",
    },
  ],
  sort: { key: "name", direction: "asc" },
  onSort: () => {},
};

export const WithSelectable = Template.bind({});
WithSelectable.args = {
  title: "With Selectable Table Header",
  select: "radio",
  columns: [
    {
      label: "Name",
      dataKey: "name",
      sort: "asc",
    },
    {
      label: "Age",
      dataKey: "age",
    },
    {
      label: "Birthday",
      dataKey: "birthday",
      sort: "desc",
    },
    {
      label: "Mobile",
      dataKey: "mobile",
    },
  ],
  sort: { key: "name", direction: "asc" },
  onSort: () => {},
};
