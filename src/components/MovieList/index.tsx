import { useGetMoviesQuery } from "../../redux/api";
import { movieType } from "../../types";
import Error from "../Error";
import ListContainer from "../ListContainer";
import Loader from "../Loader";
import MovieCard from "../MovieCard";
import Title from "../Title";

type PropsType = {
    endpoint: string;
    category: string;
};
const MovieList = ({ endpoint, category }: PropsType) => {
    const { data, isLoading, error, refetch } = useGetMoviesQuery(endpoint);

    return (
        <div>
            <Title>{category}</Title>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <div className="flex justify-center w-full">
                    <Error data={error} refetch={refetch} />
                </div>
            ) : (
                data && (
                    <ListContainer>
                        {data.results.map((movie: movieType, key: number) => (
                            <div key={key} className="col">
                                <MovieCard movie={movie} key={key} />
                            </div>
                        ))}
                    </ListContainer>
                )
            )}
        </div>
    );
};

export default MovieList;
