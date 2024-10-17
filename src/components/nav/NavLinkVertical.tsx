import NavLink from "./NavLink";
import { INavLinkProps } from "./types";
import React from "react";

export default function NavLinkVertical(props: INavLinkProps) {
  return <NavLink type="vertical" {...props} />;
}
