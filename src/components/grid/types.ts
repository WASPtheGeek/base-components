export type GridColumnType =
  | "String"
  | "Number"
  | "Date"
  | "Boolean"
  | "actions";

export type GridColumnConfig<T = object> = {
  id?: string;
  field?: keyof T;
  title?: string;
  type?: GridColumnType;
};

export type GridLocalization = {
  bool_true: string;
  bool_false: string;
};

export interface IGridProps<T = object> {
  /** The grid classname. */
  className?: string;
  /** Indicates whether grid is loading or not. */
  isLoading?: boolean;
  /** The message to display if no data is provided. */
  emptyDataMessage?: string;
  /** The column configurations. */
  columnConfigs?: GridColumnConfig<T>[];
  /** The grid data. */
  data?: T[] | null;
  /** The number of visible columns. */
  visibleColumns?: number;
  /** The grid header. */
  header?: React.ReactNode;
  /** The grid error. */
  error?: React.ReactNode;
  /** The grid footer. */
  footer?: React.ReactNode;
  /* The date format to display. */
  dateFormat?: string;
  /** The actions column header. */
  actionsHeader?: React.ReactNode;
  /** Grid localization. */
  localization?: GridLocalization;
  /** The actions column template. */
  actionsTemplate?: (rowData: T) => React.ReactNode;
  /** The cell classname. */
  cellClassName?: (field?: keyof T) => string | undefined;
}
