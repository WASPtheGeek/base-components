import NavLink from "./NavLink";
import { INavLinkProps } from "./types";

export default function NavLinkVertical(props: INavLinkProps) {
  return <NavLink type="vertical" {...props} />;
}
