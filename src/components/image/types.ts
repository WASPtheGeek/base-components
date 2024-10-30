import { FormikProps } from "formik";

export interface IImagePickerProps {
  // Component classname
  className?: string;
  // Wheter button is disabled
  disabled?: boolean;
  // Input title
  label?: string;
  // Whether to show asterisk
  required?: boolean;
  // Localized select button text
  selectText?: string;
  // Image src path
  value?: string | import("next/dist/shared/lib/get-img-props").StaticImport;
  // Default icon classname - is visible if no value provided
  defaultIcon?: string;
  // Hide default image if no value provided
  hideDefault?: boolean;
  // Error message
  error?: string;
  // Image width in px
  width?: number;
  // Image height in px
  height?: number;
  // On image select
  onChange?: (data: string) => void;
}

export interface IImagePickerFormikProps<T = object> extends IImagePickerProps {
  formikProps: FormikProps<T>;
  bagField: keyof T;
}
