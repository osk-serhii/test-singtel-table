import { ComponentStory, ComponentMeta } from "@storybook/react";

import TableBody from "./TableBody";

export default {
  title: "Table/TableBody",
  component: TableBody,
} as ComponentMeta<typeof TableBody>;

const Template: ComponentStory<typeof TableBody> = (args) => (
  <TableBody {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
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
  data: [
    {
      id: 1,
      name: "John Doe",
      age: 32,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 2,
      name: "Valentino Morose",
      age: 22,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 3,
      name: "Mavis Chen",
      age: 22,
      birthday: "2000-01-01",
      mobile: "010-12345678",
    },
  ],
  select: null,
  sort: { key: "name", direction: "asc" },
};

export const NameSortedReverseOrder = Template.bind({});
NameSortedReverseOrder.args = {
  columns: [
    {
      label: "Name",
      dataKey: "name",
      sort: 1,
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
  data: [
    {
      id: 1,
      name: "John Doe",
      age: 32,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 2,
      name: "Valentino Morose",
      age: 22,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 3,
      name: "Mavis Chen",
      age: 22,
      birthday: "2000-01-01",
      mobile: "010-12345678",
    },
  ],
  select: null,
  sort: { key: "name", direction: "desc" },
};

export const RadioSelect = Template.bind({});
RadioSelect.args = {
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
  data: [
    {
      id: 1,
      name: "John Doe",
      age: 32,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 2,
      name: "Valentino Morose",
      age: 22,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 3,
      name: "Mavis Chen",
      age: 22,
      birthday: "2000-01-01",
      mobile: "010-12345678",
    },
  ],
  select: "radio",
  sort: { key: "name", direction: "asc" },
};

export const CheckboxSelect = Template.bind({});
CheckboxSelect.args = {
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
  data: [
    {
      id: 1,
      name: "John Doe",
      age: 32,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 2,
      name: "Valentino Morose",
      age: 22,
      birthday: "1990-01-01",
      mobile: "010-12345678",
    },
    {
      id: 3,
      name: "Mavis Chen",
      age: 22,
      birthday: "2000-01-01",
      mobile: "010-12345678",
    },
  ],
  select: "checkbox",
  sort: { key: "name", direction: "asc" },
};
