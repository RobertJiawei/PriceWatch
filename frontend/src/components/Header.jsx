import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-slate-200 w-full h-10 mb-4 flex items-center">
      <h1 className=" font-bold content-center ml-2">PriceWatch</h1>
      <Link
        to="/trackList"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span>Tracked List</span>
      </Link>
    </Navbar>
  );
};
export default Header;
