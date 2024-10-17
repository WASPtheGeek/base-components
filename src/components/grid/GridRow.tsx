import { cn } from "../../utils";
import React from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  striped?: boolean;
}

function GridRow(props: IProps) {
  const { children, striped = true } = props;

  const className = cn(props.className, {
    "odd:bg-neutral-200": striped,
  });

  return <tr className={className}>{children}</tr>;
}

export default GridRow;
