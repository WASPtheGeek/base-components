"use client";

import { Button, ContainerL } from "../../components";

export default function ButtonDemo() {
  return (
    <ContainerL>
      <Button
        className="mb-4"
        label="Button"
        onClick={() => console.log("t")}
      />
      <Button
        className="mb-4"
        label="Loading"
        isLoading
        onClick={() => console.log("t")}
      />
      <Button label="Disabled" disabled onClick={() => console.log("t")} />
    </ContainerL>
  );
}
