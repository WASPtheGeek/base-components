"use client";

import { ContainerL, Icon } from "../../components";

export default function IconDemo() {
  const handleClick = (e: any) => {
    console.log(e);
  };

  return (
    <ContainerL>
      <Icon className="fas fa-times" onClick={handleClick} />
    </ContainerL>
  );
}
