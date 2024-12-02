import {useQuery} from '@tanstack/react-query';
import { useState } from 'react';

export const useMovies = (intitialUrl="http://localhost:8080/api/movies/getAll")=>{
    const [url, setUrl] = useState(intitialUrl);

    const { data, isLoading ,refetch, error} =  useQuery({
        queryKey:["movies"],
        queryFn: async ()=>{
            return fetch(url)
            .then((res)=>res.json())
            .then((data)=>data)
        }
    });

    const refetchData = (name="")=>{
        let url;
        // console.log(name);
        if(name!==""){
            // console.log(`http://localhost:8080/api/movies/getByName/${props.name}`);
            url = `http://localhost:8080/api/movies/getByName/${name}`;
        }
        else{
            // console.log(`http://localhost:8080/api/movies/getAll`);
            url = `http://localhost:8080/api/movies/getAll`;
        }
        setUrl(url);
        setTimeout(()=>refetch(), 0);
    }
    
    return [data, isLoading ,refetchData, error];
}