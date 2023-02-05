import React from "react";
import CampaignList from "./CampaignList";
import Header from "./Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import VerticalNavbar from "./VerticalNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
			<Header />
			<VerticalNavbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CampaignList />} />
					<Route path="stepone" element={<StepOne />} />
					<Route path="steptwo" element={<StepTwo />} />
					<Route path="stepthree" element={<StepThree />} />
					<Route path="stepfour" element={<StepFour />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Dashboard;
