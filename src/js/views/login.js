import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export function Login() {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const History = useHistory();
	const token = sessionStorage.getItem("token");

	function handleEmail(event) {
		setEmail(event.target.value);
	}
	function handlePass(event) {
		setPassword(event.target.value);
	}
	const handleClick = () => {
		actions.login(email, password).then(() => {
			History.push("/intro");
		});
	};

	if (store.token && store.token != "" && store.token != undefined) {
		History.push("/intro");
	}
	return (
		<div className="d-flex justify-content-center mt-5">
			{store.token && store.token != "" && store.token != undefined ? (
				History.push("/intro")
			) : (
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
							<p>
								No tenés cuenta? <a href="/register">Regístrate</a>
							</p>
						</Form>
					</div>
				</div>
			)}
		</div>
	);
}
