import React, { DetailedHTMLProps } from "react";
import { Asterisk, InputError } from ".";
import { cn } from "../../utils";

export interface ITextInputProps
  extends Omit<
    DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "value"
  > {
  label?: string;
  error?: string;
  isValid?: boolean;
  value?: string | number | null | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
}

function TextInput(props: ITextInputProps) {
  const { error, label, required, isValid, onChange, ...restProps } = props;

  // make this a controlled component
  const value = React.useMemo(() => props.value ?? "", [props.value]);

  const className = cn(
    "base-text-input",
    props.className,
    "flex flex-col gap-1 my-2",
    {
      "input-error": !!error || isValid === false,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;

    if (onChange) onChange(e, value);
  };

  const inputClassName = cn(
    "border p-2 rounded-md",
    "focus-visible:outline-amber-400",
    {
      "border-rose-500 border-2": !!error,
      "border-neutral-900": !error,
    }
  );

  return (
    <div className={className}>
      {label && (
        <div className="pl-1 flex gap-2">
          {label}
          {required && <Asterisk />}
        </div>
      )}
      <input
        {...restProps}
        value={value}
        className={inputClassName}
        onChange={handleChange}
      />
      <InputError value={error} />
    </div>
  );
}

export default TextInput;
