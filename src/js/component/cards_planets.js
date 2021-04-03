import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CardsPlanets() {
	const w_card = {
		width: "18rem",
		height: "375px"
	};

	const { store, actions } = useContext(Context);

	useEffect(() => {
		//llamamos a flux, fetchPeople obtiene del API los personajes
		actions.fetchPlanets();
	}, []);

	const [favoritoColor, setfavoritoColor] = useState("btn btn-light");
	const [corazonColor, setcorazonColor] = useState("corazon2");

	const planetcards = store.planetas.map((item, index) => (
		<div key={index} className="card m-1" style={w_card}>
			<img
				src="https://www.slashgear.com/wp-content/uploads/2013/07/hubble_hd_189733b_gas_giant_glass_planet.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">Population: {item.population} </p>
				<p className="card-text">Terrain: {item.terrain} </p>
				<div className="row d-flex justify-content-center align-text-bottom">
					<Link
						to={"/planet_detail/" + index}
						className="btn btn-outline-primary text-primary"
						onClick={() => {
							actions.changeDetail_id(index);
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
			<div className="row d-flex justify-content-center">
				<h1 id="titles"> Planets </h1>
			</div>
			<div className="row d-flex justify-content-center">{planetcards}</div>
		</div>
	);
}
