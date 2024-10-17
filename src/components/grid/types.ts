export type GridColumnType = "String" | "Number" | "Date" | "actions";

export type GridColumnConfig<T = object> = {
  id?: string;
  field?: keyof T;
  title?: string;
  type?: GridColumnType;
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
  /** The actions column template. */
  actionsTemplate?: React.ReactNode;
  /** The actions column header. */
  actionsHeader?: React.ReactNode;
  /** The cell classname. */
  cellClassName?: (field?: keyof T) => string | undefined;
}
