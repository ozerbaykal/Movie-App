import { FC, useState } from "react";
import Category from "../../components/Category";
import Container from "../../components/Container";
import MovieList from "../../components/MovieList";

const Home: FC = () => {
    const [selected, setSelected] = useState<string | null>("Trending");

    const categories = [
        { name: "Populars", endpoint: "/movie/popular" },
        { name: "Trending", endpoint: "/trending/movie/day" },
        { name: "Top Rated", endpoint: "/movie/top_rated" },
    ];

    const currentCategory = categories.find((category) => category.name === selected);

    if (!currentCategory) {
        return (
            <Container>
                <p className="text-center text-red-500">
                    Bİr hata oluştu
                    Lütfen geçerli bir kategori seçiniz
                </p>
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
