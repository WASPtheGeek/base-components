"use client";

import React from "react";
import { Nav, NavLink, NavLinks } from "../../../components";
import { useDeviceDetection } from "../../../hooks";

export default function AppNav() {
  const device = useDeviceDetection();

  const isMobile = React.useMemo(() => device === "Mobile", [device]);

  return (
    <Nav>
      <NavLinks isMobile={isMobile}>
        <NavLink keepVisible href={"/"}>
          Logo!
        </NavLink>
        <NavLink href={"/test"}>Test</NavLink>
        <NavLink keepVisible href={"/test"}>
          visible 1
        </NavLink>
        <NavLink keepVisible href={"/test"}>
          visible 2
        </NavLink>
        <NavLink keepVisible={false} href={"/test"}>
          hidden 1
        </NavLink>
        <NavLink href={"/test"}>hidden 2</NavLink>
      </NavLinks>
    </Nav>
  );
}
