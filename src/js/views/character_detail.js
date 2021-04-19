import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CharacterDetail() {
	const { store, actions } = useContext(Context);

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
							src="https://media.revistagq.com/photos/604b2f499fc97c95e82c1c14/master/pass/2101913.jpg"
							className="card-img-top"
							alt="..."
						/>
					</div>
					<div className="col-6">
						<h1>{store.personaje_detalle.name}</h1>
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
						Birth Year
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Mass
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Height
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Skin Color
					</div>
					<div className="col-2 d-flex justify-content-center" id="little_titles">
						Eye Color
					</div>
				</div>
				<div className="row mt-3 pt-2">
					<div className="col-2 d-flex justify-content-center">{store.personaje_detalle.name}</div>
					<div className="col-2 d-flex justify-content-center">{store.personaje_detalle.birth_year}</div>
					<div className="col-2 d-flex justify-content-center">{store.personaje_detalle.mass}</div>
					<div className="col-2 d-flex justify-content-center">{store.personaje_detalle.height}</div>
					<div className="col-2 d-flex justify-content-center">{store.personaje_detalle.skin_color}</div>
					<div className="col-2 d-flex justify-content-center">{store.personaje_detalle.eye_color}</div>
				</div>
			</div>
		</div>
	);
}
