import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Calculate(){
    const navigate = useNavigate();
    return(
        <div>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}