"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn, isElQuery } from "../../utils";
import { INavLinkProps } from "./types";

export default function NavLink(props: INavLinkProps) {
  const { keepVisible, noStyle, type = "horizontal", ...restProps } = props;
  const pathName = usePathname();

  const [itemRef, setItemRef] = React.useState<HTMLLIElement | null>(null);

  const isInPanel = React.useMemo(() => {
    if (!itemRef) return false;

    const parent = (itemRef as Element).parentElement;

    return isElQuery(parent, ".hidden-links");
  }, [itemRef]);

  const clsn = cn(props.className, "base-nav-link", {
    "border-b-2": !noStyle && !isInPanel,
    "border-transparent": !noStyle && !isInPanel && pathName !== props.href,
    "hover:bg-neutral-100": !noStyle, // todo: make bg color conifgurable
    "focus-visible:bg-secondary focus-visible:text-secondary-foreground":
      !noStyle, // todo: configure focus-visible
    "border-amber-500": !noStyle && !isInPanel && pathName === props.href,
    "keep-visible": keepVisible,
  });

  const linkClsn = cn("block w-full h-full", {
    "px-4 py-6": type === "horizontal" && !noStyle && !isInPanel,
    "px-4 py-1": type === "horizontal" && !noStyle && isInPanel,
    "py-4 px-6": type === "vertical",
  });

  return (
    <li ref={setItemRef} className={clsn}>
      <Link {...restProps} className={linkClsn} />
    </li>
  );
}
