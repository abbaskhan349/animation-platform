"use client";
import * as React from "react";
import NavLink from "./Navlink";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-center w-full">
      <nav className="flex gap-10 items-center px-8 py-3.5 text-sm text-white border border-solid border-white border-opacity-10 rounded-[200px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/08153c95a624a12520a12367d420c343aec5a210ffbbf1f425dd221a7643dd09?placeholderIfAbsent=true"
            alt="Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.61] w-[60px]"
          />
          <div className="flex gap-8 items-center self-stretch my-auto font-medium whitespace-nowrap min-w-60">
            <NavLink text="Home" />
            <NavLink text="Template" />
            <NavLink text="Pricing" />
            <NavLink text="About" />
          </div>
          <Button>Try it now</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
