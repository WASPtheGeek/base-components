import { DetailedHTMLProps } from "react";

export const integerRegex = new RegExp(/[^0-9]/g);

export interface INumberInputProps
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
