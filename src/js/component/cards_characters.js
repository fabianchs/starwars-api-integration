import React, { Component } from "react";
import PropTypes from "prop-types";

export function Cards() {
	const w_card = {
		width: "18rem",
		height: "425px"
	};

	return (
		<div className="row d-flex justify-content-center">
			<div id="ancho_general">
				<div className="card m-1" style={w_card}>
					<img
						src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card m-1" style={w_card}>
					<img
						src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card m-1" style={w_card}>
					<img
						src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
