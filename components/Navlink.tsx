import * as React from "react";

interface NavLinkProps {
  text: string;
  href?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="self-stretch my-auto hover:text-cyan-300 transition-colors"
    >
      {text}
    </a>
  );
};

export default NavLink;
