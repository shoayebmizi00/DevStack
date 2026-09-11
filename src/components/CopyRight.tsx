const CopyRight = () => {
  return (
    <div className="border-t border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DevStack. All rights reserved.
        </p>
      </div>
      <div className="flex gap-4">
        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default CopyRight;
