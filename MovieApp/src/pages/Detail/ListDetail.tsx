type CountryType = { iso_3166_1: string; name: string };

type CompanyType = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

type LanguageType = { english_name: string; iso_639_1: string; name: string };

type PropsType = {
    data: CompanyType[] | CountryType[] | LanguageType[];
    label: string
};


const ListDetail = ({ data, label }: PropsType) => {
    return (
        <div className="mt-4">
            <h1 className="font-sans text-amber-200 mb-1">{label}</h1>
            <div className="flex gap-4">
                {data.map((item) => (
                    <p>{item.name}</p>
                ))}

            </div>



        </div>
    )
}

export default ListDetail