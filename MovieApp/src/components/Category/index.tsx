import Title from "../Title";

type SelectedCategory = {
    setSelected: React.Dispatch<React.SetStateAction<string | null>>,
    selected: string | null
}

const Category = ({ setSelected, selected }: SelectedCategory) => {

    const menu = [
        {
            name: "Populars",
        },
        {
            name: "Trending",
        },
        {
            name: "Top Rated",
        },
    ];
    const handleTitleClick = (title: string) => {
        setSelected(title);
    };
    return <div className="flex justify-center gap-4">

        {
            menu.map((item, key) => (
                <Title key={key} designs={` transition ${selected === item.name ? "text-amber-600 scale-110 underline text-underline-offset-2  " : "hover:text-amber-600"} cursor-pointer `}
                    onClick={() => handleTitleClick(item.name)}
                >
                    {item.name}
                </Title>
            ))

        }
    </div>;
};

export default Category;
