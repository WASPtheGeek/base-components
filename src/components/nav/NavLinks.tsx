import React from "react";
import NavMobileLinks from "./NavMobileLinks";
import VisibleLinks from "./VisibleLinks";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  isMobile?: boolean;
}

export default function NavLinks(props: IProps) {
  const { children, isMobile } = props;

  if (isMobile) {
    return <NavMobileLinks>{children}</NavMobileLinks>;
  }

  return <VisibleLinks>{children}</VisibleLinks>;
}
