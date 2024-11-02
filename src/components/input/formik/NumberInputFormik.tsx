import { cn } from "../../../utils";
import { NumberInput } from "../";
import { INumberInputFormikProps } from "./types";
import React from "react";

function NumberInputFormik<T = object>(props: INumberInputFormikProps<T>) {
  const { formikProps, bagField, ...restProps } = props;

  const className = cn("base-formik-number-input", props.className);

  const error = formikProps.errors[bagField];

  return (
    <NumberInput
      {...restProps}
      className={className}
      error={error?.toString()}
    />
  );
}

export default NumberInputFormik;
