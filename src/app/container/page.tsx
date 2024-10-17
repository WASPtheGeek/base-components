"use client";

import { Container, ContainerL } from "../../components";

export default function ContainerDemo() {
  return (
    <ContainerL>
      <h2 className="font-bold">Container</h2>
      <div className="border-neutral-400 border-2 my-4">
        <Container>Some content</Container>
      </div>

      <h2 className="font-bold">Container L</h2>
      <div className="border-neutral-400 border-2 my-4">
        <ContainerL>Some content</ContainerL>
      </div>
    </ContainerL>
  );
}
