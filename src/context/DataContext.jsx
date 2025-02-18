import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch("https://api.llama.fi/v2/chains");
                const result = await response.json();
                setData(result);
                console.log(result);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);
            }
        }
        
        fetchData();
    },[]);

    return(
        <DataContext.Provider value = {{data, loading, error}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;