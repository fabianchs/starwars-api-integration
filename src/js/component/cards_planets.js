import React, { Component, useState } from "react";
import PropTypes from "prop-types";

export function CardsPlanets() {
	const w_card = {
		width: "18rem",
		height: "425px"
	};

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

	return (
		<div className="row d-flex justify-content-center">
			<div id="ancho_general" className="row d-flex justify-content-center">
				<h1 id="titles"> Planets </h1>
			</div>
			<div id="ancho_general" className="row d-flex justify-content-center">
				<div className="card m-1" style={w_card}>
					<img
						src="https://www.slashgear.com/wp-content/uploads/2013/07/hubble_hd_189733b_gas_giant_glass_planet.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<div className="row d-flex justify-content-center">
							<a href="#" className="col-6  btn btn-primary">
								Learn more!
							</a>
							<div className="col-3 d-flex justify-content-start">
								<button type="button" className={favoritoColor} onClick={() => cambiaColor()}>
									<i id={corazonColor} className="fas fa-heart" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="card m-1" style={w_card}>
					<img
						src="https://www.slashgear.com/wp-content/uploads/2013/07/hubble_hd_189733b_gas_giant_glass_planet.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<div className="row d-flex justify-content-center">
							<a href="#" className="col-6  btn btn-primary">
								Learn more!
							</a>
							<div className="col-3 d-flex justify-content-start">
								<button type="button" className={favoritoColor} onClick={() => cambiaColor()}>
									<i id={corazonColor} className="fas fa-heart" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="card m-1" style={w_card}>
					<img
						src="https://www.slashgear.com/wp-content/uploads/2013/07/hubble_hd_189733b_gas_giant_glass_planet.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<p className="card-text">Some quick example text to build</p>
						<div className="row d-flex justify-content-center">
							<a href="#" className="col-6  btn btn-primary">
								Learn more!
							</a>
							<div className="col-3 d-flex justify-content-start">
								<button type="button" className={favoritoColor} onClick={() => cambiaColor()}>
									<i id={corazonColor} className="fas fa-heart" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
