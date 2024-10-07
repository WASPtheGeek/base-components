import React from "react";

export interface IProps {
  children?: React.ReactNode;
}

export default async function Container(props: IProps) {
  const { children } = props;

  return <div className="p-4">{children}</div>;
}
