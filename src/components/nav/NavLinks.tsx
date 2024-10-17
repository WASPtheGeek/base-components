import React from "react";
import NavMobileLinks from "./NavMobileLinks";
import VisibleLinks from "./VisibleLinks";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  isMobile?: boolean;
  type?: "vertical" | "horizontal";
}

export default function NavLinks(props: IProps) {
  const { children, isMobile, ...restProps } = props;

  if (isMobile) {
    return <NavMobileLinks {...restProps}>{children}</NavMobileLinks>;
  }

  return <VisibleLinks {...restProps}>{children}</VisibleLinks>;
}
