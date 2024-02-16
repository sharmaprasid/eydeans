import React from "react";

const SideBar = () => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-64 bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-md">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-xl font-extrabold">MENU</h3>
            <ul className="mb-6 flex flex-col gap-2">
              <li>
                <a
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blue-800 hover:text-white active"
                  href="/"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blue-800 hover:text-white active"
                  href="/dashboard/bank"
                >
                  Bank
                </a>
              </li>
              <li>
                <a
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blue-800 hover:text-white active"
                  href="/dashboard/capital"
                >
                  Capital
                </a>
              </li>
              <li>
                <a
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blue-800 hover:text-white active"
                  href="/dashboard/insurance"
                >
                  Insurance
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
