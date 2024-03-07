import { Link } from "react-router-dom"
import BackButton from "../components/backbutton/BackButton";

const NotFound = () => {
    
    
    return (
        <div>
            <h1>ERROR 404: PAGE NOT FOUND</h1>
            <Link to="/">Pulsa aqui para volver a la página principal</Link>
            <BackButton />
        </div>
    )
}

export default NotFound;