"use client";
import { useState } from "react";

const AdminSideBar = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex bg-gray-900 text-white w-64 shadow-md">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <a
                  aria-current="page"
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-blue-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-white active"
                  href="/admin/user"
                >
                  ADD USER
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-blue-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-white active"
                  href="/admin/bankkyc"
                >
                  Bank Kyc
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-blue-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-white active"
                  href="/admin/bankkyc"
                >
                  Capital Kyc
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-blue-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-white active"
                  href="/admin/bankkyc"
                >
                  Insurance Kyc
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminSideBar;
