import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-slate-200 w-full h-16 mb-4 flex items-center justify-between px-4">
      <h1 className="font-extrabold text-2xl">PriceWatch</h1>

      <div className="flex gap-6">
        <Link
          to="/"
          className="whitespace-nowrap text-sm sm:text-xl font-medium"
        >
          Home
        </Link>
        <Link
          to="/trackList"
          className="whitespace-nowrap text-sm sm:text-xl font-medium"
        >
          Tracked List
        </Link>
      </div>
    </Navbar>
  );
};
export default Header;
