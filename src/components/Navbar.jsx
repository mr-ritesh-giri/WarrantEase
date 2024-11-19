import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", name: "Home" },
  { to: "/add-appliances", name: "Add Appliances" },
  { to: "/view-appliances", name: "View Appliances" },
  { to: "/feature", name: "Features" },
];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("Clicked");
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex justify-between items-center max-w-[1400px] m-auto h-[10vh] p-4">
      <div className="md:text-4xl text-3xl font-bold text-black">WarrantEase</div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center" onClick={toggleDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Desktop Links (visible on lg and up) */}
      <ul className="hidden lg:flex p-4 font-semibold text-black">
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

      {/* Drawer (Hamburger Menu) */}
      <div
        className={`${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 h-screen bg-white shadow-lg p-6 transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDrawer}
            className="text-black hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-start text-black">
          {links.map((link, index) => (
            <li key={index} className="my-2">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-gray-500" : "text-black"
                  } text-xl hover:text-gray-600`
                }
                to={link.to}
                onClick={toggleDrawer}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
