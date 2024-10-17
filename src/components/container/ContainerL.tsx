import React from "react";
import { cn } from "../../utils";

export interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContainerL(props: IProps) {
  const { children } = props;

  const className = cn("base-container-l", "p-8", props.className);

  return <div className={className}>{children}</div>;
}
