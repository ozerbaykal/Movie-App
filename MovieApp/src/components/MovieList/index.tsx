import { useGetMoviesQuery } from "../../ redux/api";
import { movieType } from "../../types";
import Error from "../Error";
import Loader from "../Loader";
import MovieCard from "../MovieCard";
import Title from "../Title";


type PropsType = {
    endpoint: string;
    category: string;
};
const MovieList = ({ endpoint, category }: PropsType) => {

    const { data, isLoading, error } = useGetMoviesQuery(endpoint)

    return (
        <div>
            <Title>{category}</Title>
            {
                isLoading ?
                    <Loader /> : error ?
                        <Error data={error} /> :
                        data && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {data.results.map((movie: movieType, key: number) => (
                                    <div className="col">
                                        <MovieCard movie={movie} key={key} />
                                    </div>
                                ))}
                            </div>

                        )
            }


        </div>
    )
}

export default MovieList