import React from "react";
import { cn } from "../../utils";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  type?: "vertical" | "horizontal";
}

export default function Nav(props: IProps) {
  const { children, type = "horizontal" } = props;

  const className = cn("base-nav", "flex z-10 ", "bg-white", props.className, {
    "w-full items-center shadow-lg min-h-18": type === "horizontal",
    "h-full": type === "vertical",
    "shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2":
      type === "vertical",
  });

  return <nav className={className}>{children}</nav>;
}
