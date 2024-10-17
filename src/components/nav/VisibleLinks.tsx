"use client";

import React from "react";
import { cn } from "../../utils";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  type?: "vertical" | "horizontal";
  onMount?: () => void;
}

export default function VisibleLinks(props: IProps) {
  const { children, className, type = "horizontal", onMount } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (onMount) onMount();
  }, []);

  if (!mounted) return null;

  const clsn = cn(className, "visible-links flex w-full", {
    "items-center": type === "horizontal",
    "flex-col": type === "vertical",
  });

  return <ul className={clsn}>{children}</ul>;
}
