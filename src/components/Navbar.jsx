import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/add-appliances", name: "Add Appliances" },
    { to: "/view-appliances", name: "View Appliances" },
    { to: "/feature", name: "Features" },
  ];

  return (
    <nav className="flex justify-between items-center max-w-[1400px] m-auto h-[10vh] p-4">
      <div className="text-4xl font-bold text-black">WarrantEase</div>
      <div>
        <ul className="flex p-4 font-semibold text-black">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-500" : "text-black"
                  } mr-6 text-xl hover:text-gray-600 relative group`
                }
                to={link.to}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
