import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Image, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-3 d-flex d-flex justify-content-center" id="nav2">
			<div id="ancho_general">
				<Link to="/" className="d-flex float-start">
					<img
						id="logo"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
					/>
				</Link>
				<div>
					{!store.token ? (
						<div>
							{" "}
							<Link to="/" className="m-1 ms-3 bg-transparent">
								<Button className="bg-success">Login</Button>
							</Link>{" "}
							<Link to="/register" className="m-1 bg-transparent">
								<Button className="bg-secondary">Registrarse</Button>
							</Link>{" "}
						</div>
					) : (
						<div className="row m-2 d-flex float-end">
							{" "}
							<Link to="/" className="bg-transparent">
								<Button className="bg-primary" onClick={() => actions.logout()}>
									Cerrar sesión
								</Button>
							</Link>
							<div>
								<DropdownButton
									className="bg-secondary"
									id="dropdown-basic-button"
									title={`Favorites ${store.favoritos.length}`}>
									{store.favoritos.map((item, index) => {
										return (
											<Dropdown.Item key={index}>
												<button
													type="button"
													className="btn btn-light"
													onClick={() => actions.delFav(store.favoritos, item)}>
													<i className="fas fa-trash float-start"></i>
													{"  " + item}
												</button>
											</Dropdown.Item>
										);
									})}
								</DropdownButton>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
