"use client";

import React from "react";
import { Nav, NavItem, NavLink, NavLinks } from "../../../components";
import { useDeviceDetection } from "../../../hooks";

export default function AppNav() {
  const device = useDeviceDetection();

  const isMobile = React.useMemo(() => device === "Mobile", [device]);

  return (
    <Nav>
      <NavLinks isMobile={isMobile}>
        <NavLink keepVisible href={"/"}>
          <i className="fas fa-chess-knight" />
        </NavLink>
        <NavLink href={"/grid"}>Grid</NavLink>
        <NavLink keepVisible href={"/splitGrid"}>
          SplitGrid
        </NavLink>
        <NavLink keepVisible href={"/button"}>
          Button
        </NavLink>
        <NavLink keepVisible={false} href={"/textInput"}>
          Text Input
        </NavLink>
        <NavLink href={"/numberInput"}>Number Input</NavLink>
        <NavLink href={"/spinner"}>Spinner</NavLink>
        <NavLink href={"/container"}>Container</NavLink>
        <NavItem keepVisible end>
          <div className="flex gap-2">
            <button>lv</button>
            <button>en</button>
            <button>ru</button>
            <br />
          </div>
        </NavItem>
      </NavLinks>
    </Nav>
  );
}
