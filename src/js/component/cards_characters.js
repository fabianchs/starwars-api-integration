import React, { Component } from "react";
import PropTypes from "prop-types";

export function Cards() {
	const w_card = {
		width: "300px"
	};
	return (
		<div>
			<div className="card" style={w_card}>
				<img
					src="https://play-lh.googleusercontent.com/f0jCBnEIgln1wJ6V-LXFWMwJ-ZVklD02ueJWCUx8hlhspylOUpLLJh9rx_sMWDgML-0K"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
