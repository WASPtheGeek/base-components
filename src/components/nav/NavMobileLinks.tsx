"use client";

import React from "react";
import VisibleLinks from "./VisibleLinks";
import NavToggle from "./NavToggle";
import HiddenLinks from "./HiddenLinks";

interface IProps {
  children?: React.ReactNode;
}

export default function NavMobileLinks(props: IProps) {
  const { children } = props;

  const [hiddenItems, setHiddenItems] = React.useState<React.ReactNode[]>([]);
  const [visibleItems, setVisibleItems] = React.useState<React.ReactNode[]>([]);
  const [visibleMounted, setVisibleMounted] = React.useState<boolean>(false);

  const splitItems = React.useCallback(() => {
    const hidden: React.ReactNode[] = [];
    const visible: React.ReactNode[] = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const { keepVisible } = element.props;

      if (keepVisible) visible.push(element);
      else hidden.push(element);
    });

    setHiddenItems(hidden);
    setVisibleItems(visible);
  }, [children]);

  React.useEffect(() => {
    splitItems();
  }, [splitItems]);

  return (
    <>
      {/* toggle */}
      {visibleMounted && (
        <NavToggle>
          <HiddenLinks>{hiddenItems}</HiddenLinks>
        </NavToggle>
      )}

      {/* basic links */}
      <VisibleLinks onMount={() => setVisibleMounted(true)}>
        {visibleItems}
      </VisibleLinks>
    </>
  );
}
