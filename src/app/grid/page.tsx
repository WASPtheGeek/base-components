"use client";

import React from "react";
import { Button, Grid, IncrementHeader } from "../../components";
import { columnConfig, tableData, TestTableModel } from "./types";

export default function GridDemo() {
  const [visibleColumns, setVisibleColumns] = React.useState<number>(
    columnConfig.length + 2
  );

  const styleCells = (field?: keyof TestTableModel) => {
    if (field?.startsWith("pet")) return "text-amber-500";
  };

  const actionsTemplate = (data: TestTableModel) => {
    console.log(data);

    return (
      <div className="flex gap-4 items-center">
        <Button label="Click" />
        <i className="fas fa-star" />
      </div>
    );
  };

  return (
    <div>
      <Grid<TestTableModel>
        columnConfigs={columnConfig}
        header={"Person table"}
        data={tableData}
      />
      <Grid<TestTableModel>
        columnConfigs={columnConfig}
        header={
          <IncrementHeader
            data={tableData}
            value={visibleColumns}
            setValue={setVisibleColumns}
            max={20}
          >
            <div>
              <h1>Features</h1>
              <ul className="list-disc ml-8">
                <li>Increment / decrement visible column count</li>
                <li>Increment header</li>
                <li>Add empty column</li>
                <li>Style cells</li>
              </ul>
            </div>
          </IncrementHeader>
        }
        data={tableData}
        visibleColumns={visibleColumns}
        cellClassName={styleCells}
      />
      <Grid<TestTableModel>
        columnConfigs={columnConfig}
        header={"Loading"}
        data={tableData}
        isLoading
        cellClassName={styleCells}
      />
      <Grid<TestTableModel>
        columnConfigs={columnConfig}
        header={"Error"}
        data={tableData}
        isLoading
        error="Unknown custom error occured"
        cellClassName={styleCells}
      />{" "}
      <Grid<TestTableModel>
        columnConfigs={columnConfig}
        header={"Actions"}
        data={tableData}
        actionsTemplate={actionsTemplate}
        actionsHeader="Custom actions"
      />
    </div>
  );
}
