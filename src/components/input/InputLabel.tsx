import React from "react";
import { cn } from "../../utils";
import { Asterisk, IInputLabelProps } from ".";

export default function InputLabel(props: IInputLabelProps) {
  const { label, required } = props;

  if (!label) return;

  const clsn = cn(
    "base-input-label",
    "pl-1 flex gap-1",
    "font-bold",
    props.className
  );

  return (
    <div className={clsn}>
      {label}
      {required && <Asterisk />}
    </div>
  );
}
