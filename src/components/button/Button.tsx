import React from "react";
import { Spinner } from "../spinner";
import { cn } from "../../utils";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  isLoading?: boolean;
}

function Button(props: IProps) {
  const { label, isLoading, ...restProps } = props;

  const disabled = React.useMemo(
    () => props.disabled || isLoading,
    [props.disabled, isLoading]
  );

  const className = cn(
    props.className,
    "base-button",
    "min-w-10 border p-2 bg-amber-400 font-bold rounded-md flex justify-center",
    {
      "hover:bg-amber-300": !disabled,
      "bg-gray-400 cursor-not-allowed": !!disabled,
    }
  );

  return (
    <button {...restProps} className={className} disabled={disabled}>
      {isLoading ? <Spinner /> : label}
    </button>
  );
}

export default Button;
