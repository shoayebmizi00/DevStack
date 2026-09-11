import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-100">
      <footer className="container mx-auto flex flex-col gap-8 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-10 w-[25%]">
          <img src={FooterLogo} alt="DevStack Logo" className="w-30" />
          <p className="text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-4">
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-lg font-bold">Product</h2>
          <div>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technology</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-lg font-bold">Company</h2>
          <div>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-lg font-bold">Legal</h2>
          <div>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
