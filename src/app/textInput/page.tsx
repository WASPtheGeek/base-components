"use client";

import React from "react";
import { ContainerL } from "../../components";
import { TextInput } from "../../components/input";

export default function InputTextDemo() {
  const [value1, setValue1] = React.useState<string>();
  const [value2, setValue2] = React.useState<string>();

  return (
    <ContainerL>
      <TextInput
        className="w-1/3 mb-4"
        placeholder="Placeholder"
        value={value1}
        onChange={(_e, value) => setValue1(value)}
        required
      />
      <TextInput
        className="w-1/3"
        placeholder="Placeholder"
        value={value2}
        onChange={(_e, value) => setValue2(value)}
        error="Some error"
        required
      />
    </ContainerL>
  );
}
