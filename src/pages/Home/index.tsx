import { FC, useState } from "react";
import Category from "../../components/Category";
import Container from "../../components/Container";
import MovieList from "../../components/MovieList";
import Error from "../../components/Error";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

const Home: FC = () => {
    const [selected, setSelected] = useState<string | null>("Trending");
    const [error, setError] = useState<FetchBaseQueryError | SerializedError | null>(null);

    const refetch = () => {
        setError(null);
    };
    const categories = [
        { name: "Populars", endpoint: "/movie/popular" },
        { name: "Trending", endpoint: "/trending/movie/day" },
        { name: "Top Rated", endpoint: "/movie/top_rated" },
    ];

    const currentCategory = categories.find((category) => category.name === selected);

    if (!currentCategory) {
        return (
            <Container>
                <Error data={error} refetch={refetch} />
            </Container>
        );
    }

    return (
        <Container>
            <Category setSelected={setSelected} selected={selected} />
            <MovieList category={currentCategory.name} endpoint={currentCategory.endpoint} />
        </Container>
    );
};

export default Home;
