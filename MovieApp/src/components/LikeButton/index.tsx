import { MdFavoriteBorder } from "react-icons/md"
import { useAddToFavoriteMutation, useGetFavoritesQuery } from "../../ redux/api"
import { FaHeart } from "react-icons/fa"

type Props = {
    id?: number,
    designs?: string,
    children?: JSX.Element
}

const LikeButton = ({ id, designs, children }: Props) => {
    const favourite = useGetFavoritesQuery();
    const isLiked = favourite.data?.results.find((i) => i.id === id);
    const [addToFavorite] = useAddToFavoriteMutation()


    const handleLike = () => {
        addToFavorite({
            media_id: id || 1,
            media_type: "movie",
            favorite: isLiked ? false : true,

        })
    }
    return (
        <div >
            <button className={` flex items-center gap-1 text-lg md:text-xl rounded-md opacity-70 hover:opacity-100 transition cursor-pointer  ${designs}`}
                onClick={handleLike}
            >
                {children}
                {


                    isLiked ?
                        <FaHeart /> :
                        <MdFavoriteBorder size={30} />


                }

            </button>


        </div>
    )
}

export default LikeButton