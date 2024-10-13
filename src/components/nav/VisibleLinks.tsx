"use client";

import React from "react";

interface IProps {
  children?: React.ReactNode;
  onMount?: () => void;
}

export default function VisibleLinks(props: IProps) {
  const { children, onMount } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (onMount) onMount();
  }, []);

  if (!mounted) return null;

  return <ul className="visible-links flex w-full">{children}</ul>;
}
