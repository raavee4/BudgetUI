import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-8 bg-[#fffafd] m-10 shadow-md">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
