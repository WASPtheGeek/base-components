import Nav from "../components/nav/Nav";
import NavLinkVertical from "../components/nav/NavLinkVertical";
import NavLinks from "../components/nav/NavLinks";

export default function NavVertical() {
  return (
    <Nav type="vertical" className="w-1/5">
      <NavLinks type="vertical">
        <NavLinkVertical href={"/grid"}>Grid</NavLinkVertical>
        <NavLinkVertical href={"/splitGrid"}>SplitGrid</NavLinkVertical>
        <NavLinkVertical href={"/button"}>Button</NavLinkVertical>
        <NavLinkVertical href={"/textInput"}>Text Input</NavLinkVertical>
        <NavLinkVertical href={"/numberInput"}>Number Input</NavLinkVertical>
        <NavLinkVertical href={"/spinner"}>Spinner</NavLinkVertical>
        <NavLinkVertical href={"/container"}>Container</NavLinkVertical>
        <NavLinkVertical href={"/verticalNav"}>Vertical nav</NavLinkVertical>
        <NavLinkVertical href={"/icon"}>Icon</NavLinkVertical>
        <NavLinkVertical href={"/image"}>Image picker</NavLinkVertical>
      </NavLinks>
    </Nav>
  );
}
