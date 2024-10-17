import { cn } from "../../utils";
import { GridColumnType } from "./types";
import React from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  type?: GridColumnType;
}

function GridHeaderCell(props: IProps) {
  const { children, type } = props;

  const className = cn(props.className, "px-2 py-4 text-start", {
    "text-end": type === "Number",
  });

  return <th className={className}>{children}</th>;
}

export default GridHeaderCell;
