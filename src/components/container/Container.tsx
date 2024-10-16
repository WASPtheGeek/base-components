import React from "react";
import { cn } from "../../utils";

export interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container(props: IProps) {
  const { children } = props;

  const className = cn("base-container", "p-4", props.className);

  return <div className={className}>{children}</div>;
}
