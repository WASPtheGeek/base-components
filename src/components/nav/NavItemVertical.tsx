import NavItem from "./NavItem";
import { INavItemProps } from "./types";

export default function NavItemVertical(props: INavItemProps) {
  return <NavItem type="vertical" {...props} />;
}
