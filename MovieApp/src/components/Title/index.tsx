
type Props = {
    children: string,
    designs?: string,
    onClick?: () => void;
}

const Title = ({ children, designs, onClick }: Props) => {
    return <h1 className={`text-2xl font-semi-bold mb-5  ${designs}`}
        onClick={onClick}>{children}</h1>;
};

export default Title;
