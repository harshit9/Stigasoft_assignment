import { useContext, useState } from "react";
import DataContext from "../context/DataContext"
import TvlCard from "./TvlCard";
import Loading from "./Loading";

const Tvl = () => {
    const { data, loading, error } = useContext(DataContext);

    const [currPage, setCurrPage ] = useState(1);

    const itemsPerPage = 12;
    let startIndex = (currPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let totalPages = Math.ceil(data.length / itemsPerPage); 

    if(loading) return <Loading />
    if(error) return <h1> Error while fetching data</h1>
    return ( 
        <div className="mx-8 md:mx-16 mt-4">

            <p className="text-white text-2xl md:text-3xl font-strong">Total Value Locked on Chain</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 w-full  mx-auto">
            {data.slice(startIndex, endIndex).map((chain, index) => (
                    <TvlCard 
                    key={index}
                    symbol={chain.tokenSymbol}
                    name={chain.name}
                    tvl={chain.tvl}
                    />
            ))}
            </div>

            <div className="flex justify-center gap-4 my-5 text-white text-md ">
                <button className="bg-blue-800 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-900 " onClick={() => setCurrPage((prev) => Math.max(prev-1, 1))}>
                    Prev
                </button>

                <p className="self-center "> {currPage} out of {totalPages}</p>

                <button className="bg-blue-800 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-900" onClick={() => setCurrPage((prev) => Math.min(prev+1, totalPages))}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Tvl
