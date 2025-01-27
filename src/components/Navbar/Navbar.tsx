import React from "react";
import Link from "next/link";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20 ">
        <img src="/logo.png" alt="logo" className="h-full" />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text sm
                 hover:bg-white  hover:text-brand-orange hover:border-brand-orange "
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
export default Navbar;
