import { useContext } from "react";
import { Context } from "../App";

export const End = ()=>{
    const [pageNo, setPageNo] = useContext(Context);
    return (
        <div className="End">
            <button onClick={()=>pageNo>1 && setPageNo(pageNo-1)}> prev </button>
            <p>{pageNo}</p>
            <button onClick={()=>setPageNo(pageNo+1)}> next </button>
        </div>
    );
}