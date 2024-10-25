"use client";

import React from "react";
import { ContainerL } from "../../components";
import { NumberInput } from "../../components/input";

export default function InputNumberDemo() {
  const [value1, setValue1] = React.useState<number>();
  const [value2, setValue2] = React.useState<number>();

  return (
    <ContainerL>
      <NumberInput
        label="Some test label"
        className="w-1/3 mb-4"
        placeholder="Placeholder"
        value={value1}
        onChange={(value) => setValue1(value)}
        required
      />
      <NumberInput
        className="w-1/3 mb-4"
        placeholder="Placeholder"
        value={value1}
        onChange={(value) => setValue1(value)}
        required
      />
      <NumberInput
        className="w-1/3"
        placeholder="Max 1 value"
        max={1}
        value={value2}
        onChange={(value) => setValue2(value)}
        isValid={false}
        error="Some error"
      />
    </ContainerL>
  );
}
