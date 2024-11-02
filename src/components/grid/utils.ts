import moment from "moment";
import { GridColumnType, GridLocalization } from "./types";

export function getDataByType<T>(
  rowData: T,
  field: string | number | symbol | undefined,
  type: GridColumnType = "String",
  dateFormat?: string,
  localization?: GridLocalization,
  actionsTemplate?: (rowData: T) => React.ReactNode
) {
  if (!field) return;

  if (field === "actions") {
    return actionsTemplate ? actionsTemplate(rowData) : undefined;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (rowData as any)[field];

  if (data === undefined || data === null) return;

  switch (type) {
    case "String":
    case "Number":
      return data.toString();
    case "Date":
      return moment(data).format(dateFormat);
    case "Boolean":
      if (data === undefined) return;

      return data === false
        ? localization?.bool_false
        : localization?.bool_true;
  }
}
