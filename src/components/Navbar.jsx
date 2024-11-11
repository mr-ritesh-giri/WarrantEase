import React from "react";

const Navbar = () => {
  //   const navItems = [{ path: "/", }];

  return (
    <nav className="flex justify-between items-center max-w-[1400px] m-auto p-4">
      <div className="text-4xl font-bold text-[#53645a]">WarrantEase</div>
      <div>
        <ul className="flex p-4 font-semibold text-[#5F6F65]">
          <li className="mr-6 text-xl">Home</li>
          <li className="mr-6 text-xl">About</li>
          <li className="mr-6 text-xl">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
