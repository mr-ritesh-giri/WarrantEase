import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/add-appliances", name: "Add Appliances" },
    { to: "/view-appliances", name: "View Appliances" },
    { to: "/feature", name: "Feature" },
  ];

  return (
    <nav className="flex justify-between items-center max-w-[1400px] m-auto h-[10vh] p-4">
      <div className="text-4xl font-bold text-black">WarrantEase</div>
      <div>
        <ul className="flex p-4 font-semibold text-black">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="mr-6 text-xl" to={link.to}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
