import React from "react";
import { cn } from "../../utils";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  type?: "vertical" | "horizontal";
}

export default function HiddenLinks(props: IProps) {
  const { children, className } = props;

  const clsn = cn(className, "hidden-links flex flex-col");

  return <ul className={clsn}>{children}</ul>;
}
