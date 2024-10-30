import { ImagePicker } from "../";
import { cn } from "../../utils";
import { IImagePickerFormikProps } from "./types";

function ImagePickerFormik<T = object>(props: IImagePickerFormikProps<T>) {
  const { formikProps, bagField, ...restProps } = props;

  const className = cn("base-formik-image-picker", props.className);

  const error = formikProps.errors[bagField];

  return (
    <ImagePicker
      {...restProps}
      className={className}
      error={error?.toString()}
    />
  );
}

export default ImagePickerFormik;
