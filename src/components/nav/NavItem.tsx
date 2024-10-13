"use client";

import Link from "next/link";
import React, { ComponentProps } from "react";
import { cn, isElQuery } from "../../utils";
import { usePathname } from "next/navigation";

interface IProps {
  /** Keep item visible in the nav and
  do not hide under the mobile toggle */
  keepVisible?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function NavItem(props: IProps) {
  const { keepVisible, children } = props;

  const [itemRef, setItemRef] = React.useState<HTMLLIElement | null>(null);

  const isInPanel = React.useMemo(() => {
    if (!itemRef) return false;

    const parent = (itemRef as Element).parentElement;

    return isElQuery(parent, ".hidden-links");
  }, [itemRef]);

  const clsn = cn(props.className, "base-nav-item", {
    "keep-visible": keepVisible,
    "px-4 py-6": !isInPanel,
    "px-4 py-1": isInPanel,
  });

  return (
    <li ref={setItemRef} className={clsn}>
      {children}
    </li>
  );
}
