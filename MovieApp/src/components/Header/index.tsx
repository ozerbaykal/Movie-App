import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-3 flex justify-between items-center gap-5">
            <div className="bg-amber-500 p-2 rounded-md cursor-pointer hover:opacity-80">
                <Link to="/">
                    <h1 className="text- text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
                        MovieApp
                    </h1>
                </Link>
            </div>

            <div className="flex items-center gap-1 w-full md:w-3/4 justify-center p-2   ">
                <input
                    type="text"
                    placeholder="Film Ara.."
                    className=" w-full md:w-3/4 border rounded-md px-3 py-2 outline-none text-black shadow-amber-400 shadow-md"
                />
                <CiSearch size={28} />
            </div>

            <div className="flex gap-5 items-center mx-2 ">
                <div className="flex gap-3 md:gap-6 items-center">
                    <Link to="/" className="hover:text-amber-500">
                        <FaHome size={28} />
                    </Link>
                    <Link to="/favorites" className="hover:text-red-500">
                        <MdFavoriteBorder size={28} />
                    </Link>
                </div>

                <div className=" items-center hidden lg:flex gap-4 ">
                    <span className="bg-gray-400 hover:bg-amber-500 hover:text-black px-2 py-1 rounded-md cursor-pointer transiton">
                        LogIn
                    </span>
                    <span className="bg-gray-400 hover:bg-amber-500 hover:text-black px-2 py-1 rounded-md cursor-pointer transition">
                        SignIn
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
