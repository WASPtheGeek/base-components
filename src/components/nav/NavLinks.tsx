import { NavMobileLinks, VisibleLinks } from ".";

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
