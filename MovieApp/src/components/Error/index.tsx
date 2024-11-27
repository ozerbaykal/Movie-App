import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type Props = {
    data: FetchBaseQueryError | SerializedError;
};


const Error = ({ data }: Props) => {
    return (
        <div className="bg-red-500 p-4 rounded-lg">
            <h1>{(data as FetchBaseQueryError)?.status || "Unknown Error"}</h1>
            <h1>Bir sorun Oluştu</h1>
        </div>
    );
};
export default Error