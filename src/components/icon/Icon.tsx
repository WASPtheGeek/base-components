import React from "react";
import { cn } from "../../utils";
import { IIconProps } from "./types";

export default function Icon(props: IIconProps) {
  const { disabled, onClick } = props;
  const clsn = cn(
    "base-icon",
    {
      "hover:cursor-pointer": !disabled && onClick !== undefined,
    },
    props.className
  );
  return <i className={clsn} onClick={onClick} />;
}
