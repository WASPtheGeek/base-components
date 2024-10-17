"use client";

import React from "react";
import { GridColumnConfig, SplitGrid } from "../../components";
import { tableData, TestTableModel } from "../grid/types";

const columnConfig: GridColumnConfig<TestTableModel>[] = [
  {
    field: "id",
    title: "Id",
  },
  {
    field: "name",
    title: "Name",
  },
];

export default function SplitGridDemo() {
  const splitDataToCols = 3;

  // const [visibleColumns, setVisibleColumns] = React.useState<number>(
  //   columnConfig.length * splitDataToCols + 1
  // );

  return (
    <div>
      <SplitGrid<TestTableModel>
        split={splitDataToCols}
        columnConfigs={columnConfig}
        header={"Basic split table"}
        data={tableData}
      />

      <SplitGrid<TestTableModel>
        split={splitDataToCols - 1}
        columnConfigs={columnConfig}
        header={"Hidden increment"}
        data={tableData}
        hideIncrement
      />
    </div>
  );
}
