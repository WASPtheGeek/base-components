"use client";

import React from "react";
import { cn, isChildren, isElQuery } from "../../utils";

interface IProps {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function NavPanel(props: IProps) {
  const { children, active, onClick } = props;
  const [itemRef, setItemRef] = React.useState<HTMLDivElement | null>(null);

  const handleClick = React.useCallback(
    (e: MouseEvent) => {
      if (!onClick) return;

      const target = e.target as Element;

      if (!target) return;

      if (isElQuery(target, ".base-nav-toggle")) {
        return;
      }

      if (isChildren(target, itemRef) && !isElQuery(target, "li a")) {
        return;
      }

      onClick();
    },
    [itemRef, onClick]
  );

  React.useEffect(() => {
    if (!onClick || !active) return;

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick, onClick, active]);

  const parent = React.useMemo(() => {
    if (!itemRef) return;

    return itemRef.parentElement?.parentElement;
  }, [itemRef]);

  const parentHeight = React.useMemo(() => {
    if (!parent) return;

    return parent.clientHeight;
  }, [parent]);

  const panelHeight = React.useMemo(() => {
    if (!active || !parentHeight) return;

    return window.innerHeight - parentHeight;
  }, [parentHeight, active]);

  const clsn = cn(
    "base-nav-panel",
    props.className,
    "absolute bg-white w-full",
    "transition-[height] duration-300",
    {
      "h-0": !active,
      "border-y-2": active,
    }
  );

  const items = React.useMemo(
    () => (active ? children : null),
    [active, children]
  );

  return (
    <div
      ref={setItemRef}
      style={{
        top: parentHeight ?? 0,
        height: panelHeight ? `${panelHeight}px` : 0,
        zIndex: active ? 1 : -1,
      }}
      className={clsn}
    >
      {items}
    </div>
  );
}
