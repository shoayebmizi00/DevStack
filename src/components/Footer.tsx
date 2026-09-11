import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-100 bg-white">
      <div className="container mx-auto px-2 py-12 sm:px-4">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <img src={FooterLogo} alt="DevStack Logo" className="w-30" />

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <ul className="flex gap-5 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-black"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-black"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-black"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-900">Product</h2>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Technology
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-900">Company</h2>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-900">Legal</h2>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
