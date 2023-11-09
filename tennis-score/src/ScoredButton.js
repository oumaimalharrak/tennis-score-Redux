import { useDispatch } from "react-redux";
import { pointScored } from "./store";

export function ScoredButton ({playerID, children}){
    const dispatch = useDispatch();
    
    return (
        <button  className="button" onClick={() => dispatch(pointScored(playerID))}> 
        {children}
        </button>
    )
    
    
}