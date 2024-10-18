import React from "react";
import { cn } from "../../utils";
import { IIconProps } from "./types";

export default function Icon(props: IIconProps) {
  const { onClick } = props;
  const clsn = cn(
    "base-icon",
    {
      "hover:cursor-pointer": onClick !== undefined,
    },
    props.className
  );
  return <i className={clsn} onClick={onClick} />;
}
