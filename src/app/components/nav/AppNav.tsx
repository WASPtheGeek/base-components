"use client";

import React from "react";
import { Nav, NavItem, NavLink, NavLinks } from "../../../components";
import { useDeviceDetection } from "../../../hooks";

export default function AppNav() {
  const device = useDeviceDetection();

  const isMobile = React.useMemo(() => device === "Mobile", [device]);

  return (
    <Nav className="border-t-2">
      <NavLinks isMobile={isMobile}>
        <NavLink keepVisible href={"/"}>
          <i className="fas fa-chess-knight" />
        </NavLink>
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
