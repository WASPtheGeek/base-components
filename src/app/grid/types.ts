import { GridColumnConfig } from "../../components";

export const tableData: TestTableModel[] = [
  {
    id: 1,
    name: "Anna",
    surname: "Beta",
    petType: undefined,
    birthDate: new Date(),
    isActive: false,
  },
  {
    id: 2,
    name: "Julia",
    surname: "Zeta",
    petType: "hedgehog",
    birthDate: new Date(),
    isActive: true,
  },
  {
    id: 3,
    name: "Maximillian Andreas",
    surname: "Ponchik",
    petType: "bunny",
    birthDate: new Date(),
    isActive: true,
  },
  {
    id: 4,
    name: "Roman",
    surname: "Doe",
    petType: "cat",
    birthDate: new Date(),
    isActive: false,
  },
  {
    id: 5,
    name: "Albus Persival Vulfrik Brian",
    surname: "Dumbledore",
    petType: "dog",
    birthDate: new Date(),
  },
  {
    id: 6,
    name: "Hermione",
    surname: "Granger",
    petType: "dog",
    birthDate: new Date(),
  },
];

export type PetType = "dog" | "cat" | "bunny" | "hedgehog";
export type TestTableModel = {
  id: number;
  name: string;
  surname: string;
  petType?: PetType;
  birthDate: Date;
  isActive?: boolean;
};

export const columnConfig: GridColumnConfig<TestTableModel>[] = [
  {
    field: "id",
    title: "Id",
    type: "Number",
  },
  {
    field: "name",
    title: "Name",
  },
  {
    field: "surname",
    title: "Surn",
  },
  {
    field: "birthDate",
    title: "BD",
    type: "Date",
  },
  {
    field: "petType",
    title: "Pet",
  },
  {
    field: "isActive",
    title: "Active",
    type: "Boolean",
  },
];
