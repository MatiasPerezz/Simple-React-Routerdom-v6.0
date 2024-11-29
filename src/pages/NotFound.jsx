import { Link } from "react-router-dom";
import Inicio from "./Inicio";

const NotFound = () => {
	return (
		<>
			<h1>404</h1>
			<Link to="/" className="btn btn-dark">
				Volver al Inicio
			</Link>
		</>
	);
};
export default NotFound;
