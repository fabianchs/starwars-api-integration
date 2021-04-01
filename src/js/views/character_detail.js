import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CharacterDetail() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		//llamamos a flux, fetchPeople obtiene del API los personajes
		actions.obtainCharacterDetail(store.id_detail);
	}, []);

	return (
		<div className="jumbotron">
			<h1>Bootstrap Tutorial 1</h1>
			<p>Bootstrap is the most popular HTML, CSS...</p>
		</div>
	);
}
