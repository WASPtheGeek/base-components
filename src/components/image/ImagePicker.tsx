import Image from "next/image";
import { cn } from "../../utils";
import { Icon } from "../icon";
import { InputError, InputLabel, TextInput } from "../input";
import { IImagePickerProps } from "./types";

export default function ImagePicker(props: IImagePickerProps) {
  const {
    label,
    required,
    value,
    hideDefault,
    disabled,
    error,
    defaultIcon = "fas fa-image",
    selectText = "Select image",
    width = "250",
    height = "250",
    onChange,
  } = props;

  const previewFiles = (files?: FileList | null) => {
    if (!files || files.length > 1) return;

    let preview: string = "";
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      preview = reader.result as string;
      if (onChange) onChange(preview);
    };

    reader.readAsDataURL(file);
  };

  const renderImg = () => {
    if (!value) {
      return hideDefault ? undefined : (
        <div
          className="flex justify-center items-center"
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          <Icon disabled className={defaultIcon} />
        </div>
      );
    }

    return <Image src={value} height={height} width={width} alt="Image" />;
  };

  const clsn = cn("base-image-picker", props.className, "space-y-2");

  const imgContainerClsn = cn("base-img-container", {
    "img-border border-2 w-fit": value !== undefined || !hideDefault,
  });

  return (
    <div className={clsn}>
      <InputLabel label={label} required={required} />

      <div className="img-content flex gap-2">
        <TextInput
          type="file"
          id="pick_image"
          className="hidden"
          onChange={(e) => {
            previewFiles(e.target.files);
          }}
        />
        <div className={imgContainerClsn}>{renderImg()}</div>
        {!disabled && (
          <label
            className="items-center img-select-btn min-w-10 border p-2 h-12 bg-amber-400 font-bold rounded-md flex justify-center hover:cursor-pointer hover:bg-amber-300"
            htmlFor="pick_image"
          >
            {selectText}
            {/* {getT("select_image", t)} */}
          </label>
        )}
      </div>
      <InputError value={error} />
    </div>
  );
}
