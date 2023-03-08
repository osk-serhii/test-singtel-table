import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "./index";

export default {
  title: "Table/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

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
  title: "Basic Table",
};

export const WithSort = Template.bind({});
WithSort.args = {
  columns: [
    {
      label: "Name",
      dataKey: "name",
      sort: "asc",
    },
    {
      label: "Age",
      dataKey: "age",
      sort: "asc",
    },
    {
      label: "Birthday",
      dataKey: "birthday",
    },
    {
      label: "Mobile",
      dataKey: "mobile",
      sort: "asc",
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
  title: "Basic Table",
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
  title: "Radio Selectable Table",
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
  title: "Checkbox Selectable Table",
};
