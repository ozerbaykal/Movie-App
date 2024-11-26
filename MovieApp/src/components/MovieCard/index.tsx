import { FaStar } from "react-icons/fa";
import { movieType } from "../../types";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import { baseImgUrl } from "../../constans";

type MovieCardProps = {
    movie: movieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
    const { id, poster_path, original_title, vote_average } = movie
    return (
        <div className="border border-amber-700 border-opacity-40 rounded-md p-4 cursor-pointer hover:bg-amber-700 hover:bg-opacity-20 h-full max-h-[550px]">
            <div className="w-full flex justify-between items-center mb-3">
                <div className="flex items-center gap-1 mb-1">
                    <p className="text-2xl font-semi-bold" >{vote_average.toFixed(1)}</p>
                    <FaStar className="text-amber-400 text-lg" />


                </div>
                <LikeButton id={movie.id} />
            </div>

            <Link className="flex flex-col gap-4 hover:scale-105 transition" to={`/movie/${id}`} >
                <img
                    className="rounded-md w-full h-full object-contain"
                    src={baseImgUrl + poster_path}
                />

                <h2 className="font-semibold line-clamp-2">{original_title}</h2>
            </Link>
        </div>
    );
}

export default MovieCard