import Container from "../../components/Container"
import MovieList from "../../components/MovieList"

const Home = () => {
    return (
        <Container>
            <div>
                <MovieList category="Populars" endpoint="/movie/popular" />

            </div>
        </Container>
    )
}

export default Home