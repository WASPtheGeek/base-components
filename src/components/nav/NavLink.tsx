"use client";

import Link from "next/link";
import React, { ComponentProps } from "react";
import { cn, isElQuery } from "../../utils";
import { usePathname } from "next/navigation";

interface IProps extends ComponentProps<typeof Link> {
  /** Keep item visible in the nav and
  do not hide under the mobile toggle */
  keepVisible?: boolean;
  noStyle?: boolean;
}

export default function NavLink(props: IProps) {
  const { keepVisible, noStyle, ...restProps } = props;
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
    "px-4 py-6": !noStyle && !isInPanel,
    "px-4 py-1": !noStyle && isInPanel,
  });

  return (
    <li ref={setItemRef} className={clsn}>
      <Link {...restProps} className={linkClsn} />
    </li>
  );
}
