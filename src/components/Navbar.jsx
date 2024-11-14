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
                  } mr-6 text-xl relative group`
                }
                to={link.to}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
