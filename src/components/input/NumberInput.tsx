import { DetailedHTMLProps } from "react";
import TextInput from "./TextInput";
import { integerRegex } from "./types";
import { cn } from "../../utils";
import React from "react";

interface INumberInputProps
  extends Omit<
    DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange" | "value"
  > {
  label?: string;
  max?: number;
  error?: string;
  isValid?: boolean;
  value?: string | number | null | undefined;
  onChange?: (value?: number) => void;
}

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
