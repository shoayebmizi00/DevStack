import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-b-gray-50 bg-white">
      <nav className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="w-32 md:w-40" />
          </div>

          <div className="hidden md:block">
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
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button className="btn">Sign In</button>

            <button className="btn btn-secondary">Sign Up</button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
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
                <a
                  className="block"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  className="block"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="block"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="block"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Sign In/Sign Up Buttons */}
            <div className="mt-5 flex flex-col gap-3">
              <button className="btn w-full">Sign In</button>

              <button className="btn btn-secondary w-full">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
