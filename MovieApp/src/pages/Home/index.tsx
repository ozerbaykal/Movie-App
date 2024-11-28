import { useState } from "react";
import Category from "../../components/Category"
import Container from "../../components/Container"
import MovieList from "../../components/MovieList"

const Home = () => {
    const [selected, setSelected] = useState<string | null>("Trending");
    const categories = [
        { name: "Populars", endpoint: "/movie/popular" },
        { name: "Trending", endpoint: "/trending/movie/day" },
        { name: "Top Rated", endpoint: "/movie/top_rated" },
    ];

    return (
        <Container>
            <Category setSelected={setSelected} selected={selected} />
            <div>
                {
                    categories.map((category) => (
                        selected === category.name && <MovieList key={category.name}
                            category={category.name} endpoint={category.endpoint}
                        />

                    ))
                }
            </div>
        </Container>
    )
}

export default Home