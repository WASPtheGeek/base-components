"use client";

import React from "react";
import { ContainerL, ImagePicker } from "../../components";

export default function ImgPickerDemo() {
  const [value, setValue] = React.useState<string | undefined>();
  const [value1, setValue1] = React.useState<string | undefined>();
  const [value2, setValue2] = React.useState<string | undefined>();
  const [value3, setValue3] = React.useState<string | undefined>();

  return (
    <ContainerL className="grid grid-cols-2 gap-4">
      <ImagePicker
        label="Basic and required"
        value={value}
        onChange={setValue}
        required
      />
      <ImagePicker
        label="Disabled"
        value={value1}
        onChange={setValue1}
        disabled
      />
      <ImagePicker
        label="Custom text"
        value={value2}
        onChange={setValue2}
        selectText="Pick item!"
      />
      <ImagePicker
        label="No default icon"
        value={value3}
        onChange={setValue3}
        hideDefault
      />
      <ImagePicker
        label="Error"
        value={value3}
        onChange={setValue3}
        error="Custom error!"
      />
      <ImagePicker
        label="Different size"
        value={value3}
        onChange={setValue3}
        width={150}
        height={100}
      />
    </ContainerL>
  );
}
