import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {
    return (
        <div className="p-3 flex justify-between items-center gap-5">
            <div className="bg-amber-500 p-2 rounded-md cursor-pointer hover:opacity-80">
                <h1 className="text- text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
                    MovieApp
                </h1>
            </div>

            <div className="flex items-center gap-1 w-full md:w-3/4 justify-center p-2   ">
                <input
                    type="text"
                    placeholder="Film Ara.."
                    className=" w-full md:w-3/4 border rounded-md px-3 py-2 outline-none text-black"
                />
                <CiSearch size={28} />
            </div>

            <div className="flex gap-5 items-center mx-2 ">
                <div className="flex gap-3 items-center">
                    <button>
                        <FaHome size={28} />
                    </button>
                    <button>
                        <MdFavoriteBorder size={28} />
                    </button>
                </div>

                <div className=" items-center hidden lg:flex gap-2 ">
                    <span className="bg-gray-400 hover:bg-amber-500 hover:text-black px-2 py-1 rounded-md cursor-pointer transiton">
                        LogIn
                    </span>
                    <span className="bg-gray-400 hover:bg-amber-500 hover:text-black px-2 py-1 rounded-md cursor-pointer transition">
                        SignIn
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
