import React, { DetailedHTMLProps } from "react";
import { InputError } from ".";
import { cn } from "../../utils";

interface IProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  isValid?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
}

function TextInput(props: IProps) {
  const { error, isValid, onChange, ...restProps } = props;

  // make this a controlled component
  const value = React.useMemo(() => props.value ?? "", [props.value]);

  const className = cn("base-text-input", props.className, "flex flex-col", {
    "input-error": !!error || isValid === false,
  });

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
