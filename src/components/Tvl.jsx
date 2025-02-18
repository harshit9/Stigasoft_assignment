import { useContext } from "react";
import DataContext from "../context/DataContext"
import TvlCard from "./TvlCard";
import Loading from "./Loading";



const Tvl = () => {
    const { data, loading, error } = useContext(DataContext);

    if(loading) return <Loading />
    if(error) return <h1> Error while fetching data</h1>
    return (
        <div className="flex items-center justify-center gap-3 flex-wrap ">
        {data.slice(0, 10).map((chain, index) => (
                <TvlCard 
                key={index}
                symbol={chain.tokenSymbol}
                name={chain.name}
                tvl={chain.tvl}
                />
        ))}
        </div>
    )
}

export default Tvl
