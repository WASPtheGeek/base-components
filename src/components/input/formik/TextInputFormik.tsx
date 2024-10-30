import React from "react";
import { cn } from "../../../utils";
import { TextInput } from "../";
import { ITextInputFormikProps } from "./types";

function TextInputFormik<T = object>(props: ITextInputFormikProps<T>) {
  const { formikProps, bagField, ...restProps } = props;

  const className = cn("base-formik-text-input", props.className);

  const error = formikProps.errors[bagField];

  return (
    <TextInput {...restProps} className={className} error={error?.toString()} />
  );
}

export default TextInputFormik;
