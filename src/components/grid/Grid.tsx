import React from "react";
import { GridFooter, GridHeader, GridHeaderCell, GridRow, GridRows } from ".";
import { GridColumnConfig, IGridProps } from "./types";
import { cn } from "../../utils";

function Grid<T = object>(props: IGridProps<T>) {
  const {
    data,
    header,
    columnConfigs,
    visibleColumns,
    isLoading,
    error,
    footer,
    dateFormat = "DD/MM/YYYY HH:mm:ss",
    actionsTemplate,
    actionsHeader = "Actions",
  } = props;

  const className = cn(
    props.className,
    "flex flex-col bg-white p-4 rounded-lg shadow-md"
  );

  const adjustedColumns = React.useMemo(() => {
    if (!columnConfigs) return;
    if (!actionsTemplate) return columnConfigs;

    return [
      ...columnConfigs,
      {
        id: "actions",
        title: actionsHeader,
        field: "actions",
        type: "actions",
      } as GridColumnConfig<T>,
    ];
  }, [columnConfigs, actionsTemplate, actionsHeader]);

  const columns = React.useMemo(() => {
    if (!visibleColumns) return adjustedColumns;

    const result = structuredClone(adjustedColumns) ?? [];

    if (result.length === visibleColumns) return result;

    // reduce visible column count
    if (result.length > visibleColumns) {
      return result.slice(0, visibleColumns);
    }

    // add empty columns
    const diff = visibleColumns - result.length;
    const emptyCol: GridColumnConfig<T> = { title: "<empty>" };

    for (let i = 0; i < diff; i++) {
      result.push(emptyCol);
    }

    return result;
  }, [visibleColumns, adjustedColumns]);

  const shouldJoinColumns = React.useMemo(
    () => isLoading || error || !columnConfigs || !data,
    [isLoading, error, columnConfigs, data]
  );

  const cols = React.useMemo(() => {
    if (!columns) return;

    if (shouldJoinColumns) {
      return <col span={columns.length} className="min-w-10"></col>;
    }

    return columns?.map((_col, index) => (
      <col key={index} className="min-w-10"></col>
    ));
  }, [shouldJoinColumns, columns]);

  const colGroup = React.useMemo(() => {
    return <colgroup>{cols}</colgroup>;
  }, [cols]);

  return (
    <div className={className}>
      <GridHeader>{header}</GridHeader>
      <div className="overflow-auto overflow-y-hidden">
        <table className="w-full">
          {colGroup}
          <thead className="">
            <GridRow striped={false}>
              {columns?.map((col, index) => (
                <GridHeaderCell key={index} type={col.type}>
                  {col.title}
                </GridHeaderCell>
              ))}
            </GridRow>
          </thead>
          <tbody>
            <GridRows {...props} columns={columns} dateFormat={dateFormat} />
          </tbody>
        </table>
      </div>
      <GridFooter>{footer}</GridFooter>
    </div>
  );
}

export default Grid;
