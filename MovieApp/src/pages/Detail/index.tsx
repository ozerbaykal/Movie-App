import { Link, useParams } from "react-router-dom"
import Container from "../../components/Container"
import { useGetDetailQuery } from "../../ redux/api"
import { IoIosArrowBack } from "react-icons/io"
import LikeButton from "../../components/LikeButton"

const Detail = () => {
    const { id } = useParams()
    console.log(id)
    const { data, isLoading, error } = useGetDetailQuery(id)
    return (
        <Container>
            <div className="flex justify-between">
                <Link to={"/"} className="flex items-center px-3 py-1 bg-gray-400 hover:bg-amber-500 transition rounded-md gap-1 hover:scale-95 hover:text-black">
                    <IoIosArrowBack />
                    Geri


                </Link>
                <LikeButton id={id ? +id : 1} designs=" bg-red-600 opacity-70 hover:opacity-100 px-2 py-1 " >
                    <p>Add Favourite</p>
                </LikeButton>



            </div>
        </Container>
    )
}

export default Detail