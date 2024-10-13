"use client";

import React from "react";
import { cn, isElQuery } from "../../utils";

interface IProps {
  /** Keep item visible in the nav and
  do not hide under the mobile toggle */
  keepVisible?: boolean;
  end?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function NavItem(props: IProps) {
  const { keepVisible, children, end } = props;

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
    "ml-auto": end,
  });

  return (
    <li ref={setItemRef} className={clsn}>
      {children}
    </li>
  );
}
