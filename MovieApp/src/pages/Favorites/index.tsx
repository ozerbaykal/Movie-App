import { FC } from "react";
import { useGetFavoritesQuery } from "../../ redux/api";
import Container from "../../components/Container";
import Error from "../../components/Error";
import ListContainer from "../../components/ListContainer";
import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import Title from "../../components/Title";
import { movieType } from "../../types";

const Favorites: FC = () => {
    const { data, isLoading, error } = useGetFavoritesQuery();
    return (
        <Container>
            <div>
                <Title>Favorites</Title>
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <Error data={error} />
                ) : (
                    data && (
                        <ListContainer>
                            {data.results.map((movie: movieType, key: number) => (
                                <div>
                                    <MovieCard movie={movie} key={key} />
                                </div>
                            ))}
                        </ListContainer>
                    )
                )}
            </div>
        </Container>
    );
};

export default Favorites;
