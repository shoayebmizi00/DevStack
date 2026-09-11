import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-b-gray-50 bg-white">
      <nav className="container mx-auto p-4">
        {/* Desktop */}
        <div className="hidden items-center justify-between md:flex">
          <div>
            <img src={Logo} alt="Logo" className="w-40" />
          </div>

          <ul className="flex items-center gap-6">
            <li>
              <a className="text-[#DB2777]" href="#">
                Home
              </a>
            </li>

            <li>
              <a href="#">Technologies</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="btn">Sign In</button>
            <button className="btn brand-gradient text-white">Sign Up</button>
          </div>
        </div>

        {/* Mobile*/}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-28 sm:w-32" />
          </div>

          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button className="btn px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
              Sign In
            </button>

            <button className="btn btn-secondary px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Responsive */}
        {isOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  className="block text-[#DB2777]"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>

              <li>
                <a className="block" href="#" onClick={() => setIsOpen(false)}>
                  Technologies
                </a>
              </li>

              <li>
                <a className="block" href="#" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a className="block" href="#" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a className="block" href="#" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
