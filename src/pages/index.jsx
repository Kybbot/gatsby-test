import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gasby Tutorial.</p>
			<StaticImage
				src="../images/clifford.webp"
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
			/>
		</Layout>
	);
};

export default IndexPage;
