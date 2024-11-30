import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useGetDetailQuery } from "../../redux/api";
import { IoIosArrowBack } from "react-icons/io";
import LikeButton from "../../components/LikeButton";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { BASE_IMG_URL } from "../../constans";
import Title from "../../components/Title";
import ListDetail from "./ListDetail";
import { FC } from "react";

const Detail: FC = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetDetailQuery(id);
    return (
        <Container>
            <div>
                <div className="flex justify-between">
                    <Link
                        to={"/"}
                        className="flex items-center px-3 py-1 bg-gray-400 hover:bg-amber-500 transition rounded-md gap-1 hover:scale-95 hover:text-black"
                    >
                        <IoIosArrowBack />
                        Geri
                    </Link>
                    <LikeButton id={id ? +id : 1} designs=" bg-red-600  px-2 py-1 ">
                        <p>Add Favourite</p>
                    </LikeButton>
                </div>
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <Error data={error} />
                ) : (
                    data && (
                        <div className="flex flex-col">
                            <img
                                className="my-5 max-h-[50vh]  object-contain"
                                src={BASE_IMG_URL + data.backdrop_path}
                                alt={data.title}
                            />

                            <div className="flex justify-between items-center">
                                <Title> {data.title}</Title>
                                <div className="flex gap-2 text-zinc-400 text-lg">
                                    {data.genres.map((genre) => (
                                        <p>{genre.name}</p>
                                    ))}
                                </div>
                            </div>
                            <p className="text-zinc-400 text-lg mb-3">{data.tagline}</p>
                            <p className="text-amber-500">{data.overview}</p>

                            <ListDetail label={"Production Companies"} items={data.production_companies} />
                            <ListDetail label={"Language"} items={data.spoken_languages} />
                            <ListDetail label={"Production Country"} items={data.production_countries} />


                        </div>
                    )
                )}
            </div>
        </Container>
    );
};

export default Detail;
