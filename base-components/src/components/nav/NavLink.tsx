"use client";

import Link from "next/link";
import React, { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export default function NavLink(props: ComponentProps<typeof Link>) {
  const pathName = usePathname();

  const clsn = cn(
    props.className,
    "px-4 py-6 border-amber-500", // todo: make border color conifgurable
    "hover:bg-neutral-100", // todo: make bg color conifgurable
    "focus-visible:bg-secondary focus-visible:text-secondary-foreground", // todo: configure focus-visible
    {
      "border-b-2": pathName === props.href,
    }
  );

  return <Link {...props} className={clsn} />;
}
