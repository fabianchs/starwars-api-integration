import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export function Login() {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let pass = "";
	let ema_il = "";

	function handleEmail(event) {
		setEmail(event.target.value);
	}
	function handlePass(event) {
		setPassword(event.target.value);
	}
	const handleClick = () => {
		const url = "https://3000-peach-piranha-ejl7w8sh.ws-us03.gitpod.io/token";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		};
		fetch(url, options)
			.then(resp => {
				if (resp.status === 200) {
					console.log(resp.json);
					return resp.json();
				} else console.log("No se ha obtenido una respuesta satisfactoria");
			})
			.then()
			.catch(error => {
				console.error("Hubo un error ;c", error);
			});
	};

	function sendData() {
		console.log("Tu contraseña es: ", pass);
		console.log("Tu email es: ", ema_il);
	}

	return (
		<div className="d-flex justify-content-center mt-5">
			<div className="bg-light border rounded rounded-3" id="ancho_form">
				<div className="p-2">
					<Form>
						<FormGroup>
							<Label for="exampleEmail">Email</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="Correo electrónico"
								value={email}
								onChange={handleEmail}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								type="password"
								name="password"
								id="examplePassword"
								placeholder="Contraseña"
								value={password}
								onChange={handlePass}
							/>
						</FormGroup>
						<Button onClick={handleClick}>Enviar</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}
