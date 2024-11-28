import { MdFavoriteBorder } from "react-icons/md"

type Props = {
    id: number,
    designs?: string,
    children?: JSX.Element
}

const LikeButton = ({ id, designs, children }: Props) => {

    return (
        <div >
            <span className={` flex items-center gap-1 text-lg md:text-xl rounded-md opacity-70 hover:opacity-100 transition cursor-pointer  ${designs}`}>
                {children}

                <MdFavoriteBorder size={30} />
            </span>


        </div>
    )
}

export default LikeButton