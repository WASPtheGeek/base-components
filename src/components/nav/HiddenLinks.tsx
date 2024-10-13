import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export default function HiddenLinks(props: IProps) {
  const { children } = props;

  return <ul className="hidden-links flex flex-col">{children}</ul>;
}
