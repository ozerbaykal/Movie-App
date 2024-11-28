import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type Props = {
    data: FetchBaseQueryError | SerializedError;
    refetch?: () => void
};


const Error = ({ data, refetch }: Props) => {
    return (
        <div className="bg-red-500 px-4  py-5 rounded-lg text-center w-3/4 ">


            <h1 className="text-xl md:text-2xl lg:text-3xl ">{(data as FetchBaseQueryError)?.status || "Unknown Error"}</h1>
            <h1>Üzgünüz,bir sorun Oluştu :(</h1>




            <button
                onClick={refetch}
                className="bg-gray-400 p-3 rounded-md cursor-pointer hover:bg-gray-600 transition hover:scale-95 mt-6">
                Tekran Deneyiniz
            </button>

        </div>
    );
};
export default Error