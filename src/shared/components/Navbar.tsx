import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-(--color-brand-green) h-12">
      <nav className="flex justify-between items-center w-full text-lg">
        <div className="ml-4">
          <Link to="#">Features</Link>
        </div>
        <div className="flex gap-4 mr-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
