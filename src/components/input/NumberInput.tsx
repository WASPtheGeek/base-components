import React from "react";
import { cn } from "../../utils";
import TextInput from "./TextInput";
import { integerRegex, INumberInputProps } from "./types";

function NumberInput(props: INumberInputProps) {
  const { max, onChange } = props;
  const className = cn("base-number-input", props.className);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    newValue = newValue?.replace(integerRegex, "");

    if (max && newValue.length > max) newValue = newValue.substring(0, max);

    const result = parseInt(newValue);

    if (onChange) onChange(isNaN(result) ? undefined : result);
  };

  return <TextInput {...props} className={className} onChange={handleChange} />;
}

export default NumberInput;
