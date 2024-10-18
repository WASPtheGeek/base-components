"use client";

import { cn } from "../../utils";
import { GridColumnType } from "./types";
import React from "react";

interface IProps {
  colSpan?: number;
  className?: string;
  children?: React.ReactNode;
  type?: GridColumnType;
}

function GridCell(props: IProps) {
  const { children, colSpan, type } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const className = cn(props.className, "px-2 py-1", {
    "text-center p-10 bg-gray-100": !!colSpan,
    "text-end": type === "Number",
  });

  return (
    <td className={className} colSpan={colSpan}>
      {children}
    </td>
  );
}

export default GridCell;
