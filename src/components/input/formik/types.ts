import { FormikProps } from "formik";
import { INumberInputProps, ITextInputProps } from "../types";

export interface ITextInputFormikProps<T = object> extends ITextInputProps {
  formikProps: FormikProps<T>;
  bagField: keyof T;
}

export interface INumberInputFormikProps<T = object> extends INumberInputProps {
  formikProps: FormikProps<T>;
  bagField: keyof T;
}
