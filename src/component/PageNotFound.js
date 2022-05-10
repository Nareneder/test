import { useParams } from "react-router-dom";

export default function PageNotFound(){
    const params = useParams();
    return <p>"{params.pageName}" Page Not Found</p>
}