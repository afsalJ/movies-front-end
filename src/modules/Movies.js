import { Movie } from "./Movie";
import { End } from './End';
import { useMovies } from "./useMovies";
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";

export const Movies = ()=>{
    const [data, isLoading, refetch, error] = useMovies();
    const [searchName , setSearchName] = useState("");
    const [movies, setMovies] = useState([]);

    const [message, setMessage] = useState(true);
    const [pageNo] = useContext(Context);

    useEffect(
        ()=>{

            if (isLoading) {
                setMessage(true); 
            }
            else{
                setMessage(false);
            }

            if(data){
                console.log(data);
                const startIndex = (pageNo - 1) * 9;
                const endIndex = startIndex + 9;
                setMovies(data.slice(startIndex, endIndex));
            }
            if(error){
                setMovies([]); 
            }

        },
        [data, error, isLoading, pageNo]
    );

    

    return (
        <div className="MoviesPage">
            <div className="nav">
                <button onClick={()=>{
                    refetch();
                    setSearchName("");
                }} className="nav-componet">reload</button>
                <div className="nav-component">
                    <input type="text" value={searchName} onChange={(event)=>setSearchName(event.target.value)}/>
                    <button onClick={()=>refetch(searchName)}>search</button>
                </div>
                
            </div>
            
            <div className="Movies">
                {
                    message && <h1>Loading</h1>
                }
                {
                    error && <h1>{error?.response?.data?.message || "Unexpected error occured"}</h1>
                }
                {
                    movies.map((movie, key)=>{
                        return <div key={key}><Movie movie={movie}/></div>
                    })
                }
                
            </div>
            <End/>
        </div>
        
    );
}