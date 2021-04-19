import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function PlanetDetail() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		//llamamos a flux, fetchPeople obtiene del API los personajes
		//actions.restoreCharPlan(); //Con esto se evita que durante la carga del personaje, aparezcan los datos anteriores
		//actions.obtainPlanetDetail(store.id_detail);
	}, []);

	return (
		<div className="container d-flex justify-content-center">
			<div className="jumbotron " id="ancho_general">
				<div className="row d-flex justify-content-end">
					<Link
						to="/"
						className="btn btn-outline-primary text-primary"
						onClick={() => {
							actions.restoreCharPlan();
						}}>
						Go back
					</Link>
				</div>
				<div className="row">
					<div className="col-6">
						<img
							src="https://image.winudf.com/v2/image/Y29tLmhkd2FsbHBhcGVyLnBsYW5ldGhkd2FsbHBhcGVyc19zY3JlZW5fMV9tMGVhOHFsNA/screen-1.jpg?fakeurl=1&type=.jpg"
							className="card-img-top"
							alt="..."
						/>
					</div>
					<div className="col-6">
						<h1>{store.planeta_detalle.name}</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
							simply dummy text of the printing and typesetting industry.
						</p>
					</div>
				</div>
				<div className="row mt-3 pt-2 border-top border-5 border-danger">
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Name
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Climate
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Diameter
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Gravity
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Orbital Period
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Population
					</div>
				</div>
				<div className="row mt-3 pt-2">
					<div className="col-2 d-flex justify-content-center">{store.planeta_detalle.name}</div>
					<div className="col-2 d-flex justify-content-center">{store.planeta_detalle.climate}</div>
					<div className="col-2 d-flex justify-content-center">{store.planeta_detalle.diameter}</div>
					<div className="col-2 d-flex justify-content-center">{store.planeta_detalle.gravity}</div>
					<div className="col-2 d-flex justify-content-center">{store.planeta_detalle.orbital_period}</div>
					<div className="col-2 d-flex justify-content-center">{store.planeta_detalle.population}</div>
				</div>
			</div>
		</div>
	);
}
