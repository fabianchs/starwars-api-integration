import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let imagen = "https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale";

export function CardsCharacters() {
	const w_card = {
		width: "18rem",
		height: "425px"
	};

	const { store, actions } = useContext(Context);
	let cont_personaje = 1;
	let cargados = false;

	useEffect(() => {
		//llamamos a flux, fetchPeople obtiene del API los personajes
		actions.fetchPeople();
	}, []);

	const [favoritoColor, setfavoritoColor] = useState("btn btn-light");
	const [corazonColor, setcorazonColor] = useState("corazon2");

	function cambiaColor() {
		if (favoritoColor == "btn btn-light") {
			setfavoritoColor("btn btn-warning");
			setcorazonColor("corazon");
		} else {
			setfavoritoColor("btn btn-light");
			setcorazonColor("corazon2");
		}
	}

	const characterCards = store.personajes.map((item, index) => (
		<div key={index} className="card m-1" style={w_card}>
			<img
				src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">Gender: {item.gender} </p>
				<p className="card-text">Hair Color: {item.hair_color} </p>
				<p className="card-text">Eye Color: {item.eye_color} </p>
				<div className="row d-flex justify-content-center">
					<Link
						to={"/character_detail/" + index}
						className="btn btn-outline-primary text-primary"
						onClick={() => {
							actions.changeChar_detail(store.personajes[index]);
						}}>
						Learn more!
					</Link>
					<div className="col-3 d-flex justify-content-start">
						<button
							type="button"
							className={favoritoColor}
							onClick={() => actions.agrFav(index, store.favoritos, item.name)}>
							<i id={corazonColor} className="fas fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className="row d-flex justify-content-center">
			<div id="ancho_general" className="row d-flex justify-content-center">
				<h1 id="titles"> Characters </h1>
			</div>
			<div className="row flex-row flex-nowrap overflow-auto">
				<div className="row d-flex justify-content-center">{characterCards}</div>
			</div>
		</div>
	);
}
