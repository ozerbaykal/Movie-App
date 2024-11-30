import { FaStar } from "react-icons/fa";
import { movieType } from "../../types";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import { BASE_IMG_URL } from "../../constans";
import { FC } from "react";

type MovieCardProps = {
    movie: movieType;
};

const MovieCard: FC<MovieCardProps> = ({ movie }: MovieCardProps) => {
    const { id, poster_path, original_title, vote_average } = movie

    const calculateVote = (vote: Number) => vote.toFixed(1)

    return (
        <div className="border border-amber-700 border-opacity-40 rounded-md p-4 cursor-pointer hover:bg-amber-700 hover:bg-opacity-15 h-full max-h-[550px]">
            <div className="w-full flex justify-between items-center mb-3">
                <div className="flex items-center gap-1 mb-1">
                    <p className="text-2xl font-semi-bold" >{calculateVote(vote_average)}</p>
                    <FaStar className="text-amber-400 text-lg" />


                </div>
                <LikeButton id={movie.id} designs="text-red-600 hover:scale-125" />
            </div>

            <Link className="flex flex-col gap-4 transition " to={`/movie/${id}`} >
                <img
                    className="rounded-md w-full h-full object-contain hover:scale-110 transition"
                    src={BASE_IMG_URL + poster_path}
                />

                <h2 className="font-semibold line-clamp-2">{original_title}</h2>
            </Link>
        </div>
    );
}

export default MovieCard