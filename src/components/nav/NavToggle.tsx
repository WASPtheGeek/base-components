"use client";

import React from "react";
import NavPanel from "./NavPanel";
import { cn } from "../../utils";

interface IProps {
  children?: React.ReactNode;
}

export default function NavToggle(props: IProps) {
  const { children } = props;
  const [active, setActive] = React.useState<boolean>();

  const clsn = cn("base-nav-toggle-container", {
    active: active,
  });

  const toggleClsn = cn(
    "base-nav-toggle",
    "fas fa-bars",
    "p-2 h-full text-2xl w-12 text-center",
    "hover:cursor-pointer",
    {
      "toggle-active": active,
      "text-amber-500": active,
    }
  );

  const toggleActive = () => setActive(!active);
  const hide = () => {
    if (!active) return;
    setActive(false);
  };

  return (
    <div className={clsn}>
      <i className={toggleClsn} onClick={toggleActive} />
      <NavPanel active={active} onClick={hide}>
        {children}
      </NavPanel>
    </div>
  );
}
