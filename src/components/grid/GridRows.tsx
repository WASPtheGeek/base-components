import { GridCell, GridRow } from ".";
import { cn } from "../../utils";
import { Spinner } from "../spinner";
import { GridColumnConfig, IGridProps } from "./types";
import { getDataByType } from "./utils";

interface IProps<T> extends IGridProps<T> {
  columns?: GridColumnConfig<T>[];
}

function GridRows<T = object>(props: IProps<T>) {
  const {
    data,
    columnConfigs,
    emptyDataMessage,
    isLoading,
    error,
    columns,
    dateFormat,
    actionsTemplate,
    cellClassName,
  } = props;

  if (error) {
    return (
      <GridRow>
        <GridCell colSpan={columns?.length}>{error}</GridCell>
      </GridRow>
    );
  }

  if (isLoading) {
    return (
      <GridRow>
        <GridCell colSpan={columns?.length}>
          <Spinner />
        </GridCell>
      </GridRow>
    );
  }

  if (!columnConfigs && !columns) {
    return (
      <GridRow>
        <GridCell className="text-center">
          {"No grid column config provided"}
        </GridCell>
      </GridRow>
    );
  }

  if (!data || !Array.isArray(data)) {
    return (
      <GridRow>
        <GridCell colSpan={columns?.length}>
          {emptyDataMessage ?? "No data"}
        </GridCell>
      </GridRow>
    );
  }

  return (
    <>
      {data.map((rowData, rowIndex) => (
        <GridRow key={rowIndex} className="hover:bg-neutral-100">
          {columns?.map((col, colIndex) => {
            const customClassName = cellClassName
              ? cellClassName(col.field)
              : undefined;

            const tdClassName = cn(customClassName);

            const field = col.id ?? col.field;

            return (
              <GridCell key={colIndex} className={tdClassName} type={col.type}>
                {field ? (
                  <div>
                    {getDataByType(
                      rowData,
                      field,
                      col.type,
                      dateFormat,
                      actionsTemplate
                    )}
                  </div>
                ) : undefined}
              </GridCell>
            );
          })}
        </GridRow>
      ))}
    </>
  );
}

export default GridRows;
