import { NavItemVertical } from "../../components";
import Nav from "../../components/nav/Nav";
import NavLinkVertical from "../../components/nav/NavLinkVertical";
import NavLinks from "../../components/nav/NavLinks";

export default function NavDemoVertical() {
  return (
    <Nav type="vertical" className="w-1/5">
      <NavLinks type="vertical">
        <NavLinkVertical href={"/"}>
          <i className="fas fa-chess-knight" />
        </NavLinkVertical>
        <NavLinkVertical href={"/grid"}>Grid</NavLinkVertical>
        <NavLinkVertical href={"/splitGrid"}>SplitGrid</NavLinkVertical>
        <NavLinkVertical href={"/button"}>Button</NavLinkVertical>
        <NavItemVertical>
          <div className="">
            <button>lv</button>
          </div>
        </NavItemVertical>
      </NavLinks>
    </Nav>
  );
}
