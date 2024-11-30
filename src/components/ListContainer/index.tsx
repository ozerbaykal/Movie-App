
type Props = {
    children: JSX.Element | JSX.Element[]
}
const ListContainer = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {children}
        </div>
    )
}

export default ListContainer