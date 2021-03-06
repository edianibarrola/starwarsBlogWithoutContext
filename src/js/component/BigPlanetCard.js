import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import swSideImage from "/workspace/react-hello-webapp/src/img/starwarsHorizontal.jpg";
import logoIMG from "/workspace/react-hello-webapp/src/img/swLogo.png";
import planetImage from "/workspace/react-hello-webapp/src/img/MainGalaxy.png";

export class BigPlanetCard extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		let planet = this.props.location.state.planetInfo ? this.props.location.state.planetInfo : null;
		return (
			<>
				<img className="mx-auto" src={logoIMG} />
				<div className="mx-auto" style={{ maxWidth: "80vw", maxHeight: "80vh " }}>
					<div className="card cardBig mb-3 mx-auto" style={{ maxWidth: "auto", maxHeight: "auto " }}>
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={planetImage} className="card-img cardImgBig" alt="..." />
							</div>
							<div className="col-md-8 cardBgBig">
								<div className="card-body pt-2 text-center card-bodyBig">
									<h2 className="card-title mx-auto">{planet.name}</h2>
									<div className="card-text d-flex ">
										<ul className="mx-auto col-3">
											<li>Diameter: </li>
											<li>Rotation Period: {planet.rotation_period} </li>
											<li>Orbital Period: {planet.orbital_period}</li>
											<li>Gravity: {planet.gravity}</li>
											<li>Population: {planet.population}</li>
											<li>Climate: {planet.climate}</li>
											<li>Terrain: {planet.terrain}</li>
											<li>Surface Water: {planet.surface_water}% </li>
										</ul>

										<p className="text-left pt-4 px-2">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
								<div className="d-flex align-content-bottom float-left  bottomTitleBig">Databank</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
BigPlanetCard.propTypes = {
	location: PropTypes.object
};
