type Country = { iso_3166_1: string; name: string };

type Company = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

type Language = { english_name: string; iso_639_1: string; name: string };

type ListDetailProps = {
    items: Company[] | Country[] | Language[];
    label: string;
};

const ListDetail = ({ items, label }: ListDetailProps) => {
    return (
        <div className="mt-4">
            <h1 className="font-sans text-amber-200 mb-1">{label}</h1>
            <div className="flex gap-4">
                {items.map((item, index) => {
                    if ("name" in item) {
                        return <p key={index}>{item.name}</p>;
                    }
                })}
            </div>
        </div>
    );
};

export default ListDetail;
