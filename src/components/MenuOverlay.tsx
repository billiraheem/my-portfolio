import React from "react";
import { NavLink } from "./NavLink";
import { LinkProps } from "./NavLink";

interface MenuProps {
  links: LinkProps[];
}

export const MenuOverlay = ({ links }: MenuProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
