import { DetailedHTMLProps } from "react";
import TextInput from "./TextInput";
import { integerRegex } from "./types";
import { cn } from "../../utils";
import React from "react";

type NumberInputProps = Omit<
  DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange"
>;

interface IProps extends NumberInputProps {
  max?: number;
  error?: string;
  isValid?: boolean;
  onChange?: (value?: number) => void;
}

function NumberInput(props: IProps) {
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
