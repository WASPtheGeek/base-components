import Link from "next/link";
import { ComponentProps } from "react";

export interface INavLinkProps extends ComponentProps<typeof Link> {
  /** Keep item visible in the nav and
    do not hide under the mobile toggle */
  keepVisible?: boolean;
  noStyle?: boolean;
  type?: "vertical" | "horizontal";
}

export interface INavItemProps {
  /** Keep item visible in the nav and
    do not hide under the mobile toggle */
  keepVisible?: boolean;
  end?: boolean;
  className?: string;
  children?: React.ReactNode;
  type?: "vertical" | "horizontal";
}
