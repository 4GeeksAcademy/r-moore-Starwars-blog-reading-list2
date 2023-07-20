import React from "react";
import People from "../component/people.jsx";
import Planets from "../component/planet.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		< People />
		< Planets />
	</div>
);