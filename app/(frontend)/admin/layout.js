import AdminSideBar from "../components/AdminSideBar";
import NavBarComponent from "../components/NavBarComponent";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Dashboard({ children }) {
  return (
    <>
      <NavBarComponent />
      <div className="flex flex-row ">
        <AdminSideBar className="w-1/4 h-screen" />
        {/* <NavBarComponent /> */}
        <div className="w-3/4 p-4 mt-10 align-center">{children}</div>
      </div>
    </>
  );
}
