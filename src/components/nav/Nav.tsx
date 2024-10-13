import React from "react";
import { cn } from "../../utils";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Nav(props: IProps) {
  const { children } = props;

  const className = cn(
    "base-nav",
    props.className,
    "flex z-10 shadow-lg w-full items-center",
    "min-h-18",
    "bg-white"
  );

  return <nav className={className}>{children}</nav>;
}
