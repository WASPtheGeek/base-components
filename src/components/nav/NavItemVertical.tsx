import NavItem from "./NavItem";
import { INavItemProps } from "./types";
import React from "react";

export default function NavItemVertical(props: INavItemProps) {
  return <NavItem type="vertical" {...props} />;
}
