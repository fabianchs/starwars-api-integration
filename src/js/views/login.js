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
		ema_il = event.target.value;
	}
	function handlePass(event) {
		pass = event.target.value;
	}

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
								onChange={handlePass}
							/>
						</FormGroup>
						<Button onClick={sendData}>Enviar</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}
