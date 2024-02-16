// NavBarComponent.js
import Logout from "./LogoutComponent";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavBarComponent = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white h-16 shadow-md flex items-center justify-between px-4">
      <div className="flex items-center">
        <p className="text-lg font-extrabold">Bibaabo</p>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <ThemeSwitcher />
        <Logout />
      </div>
    </div>
  );
};

export default NavBarComponent;
