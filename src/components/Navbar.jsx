import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar navbar-darl bg-dark">
			<NavLink className="btn btn-primary" to="/">
				Inicio
			</NavLink>
			<NavLink className="btn btn-primary" to="/contacto">
				Contacto
			</NavLink>
			<NavLink className="btn btn-primary" to="/blog">
				Blog
			</NavLink>
		</div>
	);
};
export default Navbar;
