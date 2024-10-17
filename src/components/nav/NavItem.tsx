"use client";

import React from "react";
import { cn, isElQuery } from "../../utils";
import { INavItemProps } from "./types";

export default function NavItem(props: INavItemProps) {
  const { keepVisible, type = "horizontal", children, end } = props;

  const [itemRef, setItemRef] = React.useState<HTMLLIElement | null>(null);

  const isInPanel = React.useMemo(() => {
    if (!itemRef) return false;

    const parent = (itemRef as Element).parentElement;

    return isElQuery(parent, ".hidden-links");
  }, [itemRef]);

  const clsn = cn(props.className, "base-nav-item", {
    "keep-visible": keepVisible,
    "px-4 py-6": type === "horizontal" && !isInPanel,
    "px-4 py-1": type === "horizontal" && isInPanel,
    "ml-auto": type === "horizontal" && end,
    "mt-auto": type === "vertical" && end,
    "py-4 px-6": type === "vertical",
  });

  return (
    <li ref={setItemRef} className={clsn}>
      {children}
    </li>
  );
}
