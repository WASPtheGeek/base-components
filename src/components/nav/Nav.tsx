import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export default async function Nav(props: IProps) {
  const { children } = props;

  return <nav className="flex z-10 shadow-lg w-full min-h-18">{children}</nav>;
}
