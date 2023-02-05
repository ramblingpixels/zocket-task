import React, { useState } from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
	const [selectedIndex, setSelectedIndex] = useState(1);
	const [selectedIndex1, setSelectedIndex1] = useState(3);
	const [value, setValue] = useState(1000);
	const [value1, setValue1] = useState(10);
	const [isLocation, setIsLocation] = useState(true);
	// const [isInr, setIsInr] = useState(true);

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleChange1 = (event) => {
		setValue1(event.target.value);
	};

	const changeBackground = (ev, index) => {
		ev.preventDefault();
		setSelectedIndex(index);
	};

	const handleToggle = (ev, index) => {
		ev.preventDefault();
		setSelectedIndex1(index);
	};
	return (
		<div>
			<div className="above-content above-content-stepone ">
				<div className="above-text">
					<h1 className="campaign-list-title">Your ad campaign</h1>
					<h4 className="campaign-list-subtitle">
						Launch your ad in just 4 easy steps.
					</h4>
				</div>
				<div className="progress-bar-stepone progress-bar-stepthree">
					<div className="progress-node stepone-node-one">
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.8033 25.6666C17.7333 25.6666 17.6517 25.655 17.5817 25.6316C15.2367 24.9666 12.775 24.9666 10.43 25.6316C9.99833 25.7483 9.54333 25.5033 9.42667 25.0716C9.29833 24.64 9.555 24.185 9.98667 24.0683C12.6233 23.3216 15.4 23.3216 18.0367 24.0683C18.4683 24.1966 18.725 24.64 18.5967 25.0716C18.48 25.4333 18.1533 25.6666 17.8033 25.6666Z"
								fill="white"
							/>
							<path
								d="M22.4117 7.42001C21.1983 4.97001 18.8533 3.16168 16.135 2.56668C13.2883 1.93668 10.3717 2.61335 8.14333 4.41001C5.90333 6.19501 4.63167 8.86668 4.63167 11.725C4.63167 14.7467 6.44 17.9083 9.17 19.74V20.7083C9.15833 21.035 9.14667 21.5367 9.54333 21.945C9.95167 22.365 10.5583 22.4117 11.0367 22.4117H17.0217C17.6517 22.4117 18.13 22.2367 18.4567 21.91C18.9 21.455 18.8883 20.8717 18.8767 20.5567V19.74C22.4933 17.3017 24.7683 12.1567 22.4117 7.42001ZM16.0067 13.5567L14.7583 15.7267C14.595 16.0067 14.3033 16.17 14 16.17C13.8483 16.17 13.6967 16.135 13.5683 16.0533C13.1483 15.8083 13.0083 15.2717 13.2417 14.8633L14.2333 13.1367H13.2533C12.67 13.1367 12.1917 12.88 11.935 12.4483C11.6783 12.005 11.7017 11.4683 11.9933 10.955L13.2417 8.78501C13.4867 8.36501 14.0233 8.22501 14.4317 8.45835C14.8517 8.70335 14.9917 9.24001 14.7583 9.64835L13.7667 11.375H14.7467C15.33 11.375 15.8083 11.6317 16.065 12.0633C16.3217 12.5067 16.2983 13.055 16.0067 13.5567Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="progress-node stepthree-node-two">
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.4467 6.50991H21.98L18.0367 2.56657C17.7217 2.25157 17.2083 2.25157 16.8817 2.56657C16.5667 2.88157 16.5667 3.39491 16.8817 3.72157L19.67 6.50991H8.33001L11.1183 3.72157C11.4333 3.40657 11.4333 2.89324 11.1183 2.56657C10.8033 2.25157 10.29 2.25157 9.96334 2.56657L6.03168 6.50991H5.56501C4.51501 6.50991 2.33334 6.50991 2.33334 9.49657C2.33334 10.6282 2.56668 11.3749 3.05668 11.8649C3.33668 12.1566 3.67501 12.3082 4.03668 12.3899C4.37501 12.4716 4.73668 12.4832 5.08668 12.4832H22.9133C23.275 12.4832 23.6133 12.4599 23.94 12.3899C24.92 12.1566 25.6667 11.4566 25.6667 9.49657C25.6667 6.50991 23.485 6.50991 22.4467 6.50991Z"
								fill="#fff"
							/>
							<path
								d="M22.225 14H5.68165C4.95832 14 4.40999 14.6417 4.52665 15.3533L5.50665 21.35C5.83332 23.3567 6.70832 25.6667 10.5933 25.6667H17.1383C21.07 25.6667 21.77 23.695 22.19 21.49L23.3683 15.3883C23.5083 14.665 22.96 14 22.225 14ZM12.3783 21.525C12.3783 21.98 12.0167 22.3417 11.5733 22.3417C11.1183 22.3417 10.7567 21.98 10.7567 21.525V17.675C10.7567 17.2317 11.1183 16.8583 11.5733 16.8583C12.0167 16.8583 12.3783 17.2317 12.3783 17.675V21.525ZM17.3717 21.525C17.3717 21.98 17.01 22.3417 16.555 22.3417C16.1117 22.3417 15.7383 21.98 15.7383 21.525V17.675C15.7383 17.2317 16.1117 16.8583 16.555 16.8583C17.01 16.8583 17.3717 17.2317 17.3717 17.675V21.525Z"
								fill="#fff"
							/>
						</svg>
					</div>
					<div className="progress-node stepthree-node-three">
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.9579 2.98626H19.0634C20.2262 2.98626 21.1689 3.92892 21.1689 5.09174V19.1283C21.1689 20.2911 20.2262 21.2338 19.0634 21.2338H2.21956C1.05673 21.2338 0.114075 20.2911 0.114075 19.1283V5.09174C0.114075 3.92892 1.05673 2.98626 2.21955 2.98626H4.32503V0.178955H5.72869V2.98626H15.5543V0.178955H16.9579V2.98626ZM8.53599 11.4082H4.32503V10.0045H8.53599V11.4082ZM16.9579 10.0045H12.747V11.4082H16.9579V10.0045ZM8.53599 15.6191H4.32503V14.2155H8.53599V15.6191ZM12.747 15.6191H16.9579V14.2155H12.747V15.6191Z"
								fill="#fff"
							/>
						</svg>
					</div>
					<div className="progress-node stepthree-node-four ">
						<svg
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.938232 12.2839C0.938232 5.83475 6.16629 0.606689 12.6154 0.606689C19.0646 0.606689 24.2926 5.83475 24.2926 12.2839C24.2926 18.733 19.0646 23.9611 12.6154 23.9611C6.16629 23.9611 0.938232 18.733 0.938232 12.2839ZM11.9487 17.2827L18.6727 8.87775L17.4569 7.90513L11.7252 15.0698L7.66448 11.6858L6.66774 12.8819L11.9487 17.2827Z"
								fill="#ABB5C2"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="step3-flex">
				<div className="stepone-card stepthree-card">
					<h4>
						Campaign Settings <span>(Step 3 of 4)</span>
					</h4>

					<hr />

					<div className="budget-dates">
						<div>
							<span>1</span>
							<h4>Budget and dates information</h4>
						</div>

						<p className="timeline">Budget Timeline</p>
						<div className="toggle-buttons">
							<button
								key={1}
								onClick={(ev) => changeBackground(ev, 1)}
								style={
									1 === selectedIndex
										? {
												backgroundColor: "#0F6EFF",
												color: "#ffffff",
												zIndex: "2",
										  }
										: {
												backgroundColor: "#f0f0f0",
												color: "#999999",
												zIndex: "1",
										  }
								}
								className="lifetime"
							>
								Lifetime
							</button>
							<button
								key={2}
								onClick={(ev) => changeBackground(ev, 2)}
								style={
									2 === selectedIndex
										? {
												backgroundColor: "#0F6EFF",
												color: "#ffffff",
												zIndex: "2",
										  }
										: {
												backgroundColor: "#f0f0f0",
												color: "#999999",
												zIndex: "1",
										  }
								}
								className="daily"
							>
								Daily
							</button>
						</div>
						<div className="date-selector">
							<div>
								<p>Start Date</p> <br />
								<input type="date" id="start-date" />
							</div>
							<div>
								<p>End Date</p> <br />
								<input type="date" id="end-date" />
							</div>
						</div>
					</div>

					<div className="budget-slider">
						<div>
							<div className="currency-div">
								<p>
									Enter campaign budget:{" "}
									<span style={{ fontWeight: "500", opacity: "1" }}>
										{value}
									</span>
								</p>
								<select
									className="currency-selector"
									name="currency"
									id="currency"
								>
									<option value="inr">₹ INR</option>
									<option value="usd">$ USD</option>
								</select>
							</div>

							<div className="slider-div">
								<input
									type="range"
									min="0"
									max="10000"
									value={value}
									onChange={handleChange}
									style={{ width: "100%" }}
								/>
								<br />
								<div className="slider-range">
									<p>0</p>
									<p>10000</p>
								</div>
							</div>
						</div>
					</div>

					<div className="budget-dates">
						<div>
							<span>2</span>
							<h4>Location Information</h4>
						</div>

						<p className="timeline">Location type</p>
						<div className="toggle-buttons">
							<button
								key={3}
								onClick={(ev) => handleToggle(ev, 3)}
								style={
									3 === selectedIndex1
										? {
												backgroundColor: "#0F6EFF",
												color: "#ffffff",
												zIndex: "2",
										  }
										: {
												backgroundColor: "#f0f0f0",
												color: "#999999",
												zIndex: "1",
										  }
								}
								className="lifetime"
							>
								Location
							</button>
							<button
								key={4}
								onClick={(ev) => handleToggle(ev, 4)}
								style={
									4 === selectedIndex1
										? {
												backgroundColor: "#0F6EFF",
												color: "#ffffff",
												zIndex: "2",
										  }
										: {
												backgroundColor: "#f0f0f0",
												color: "#999999",
												zIndex: "1",
										  }
								}
								className="daily"
							>
								Radius
							</button>
						</div>

						<div
							className="location-field"
							style={
								3 === selectedIndex1
									? {
											display: "block",
									  }
									: {
											display: "none",
									  }
							}
						>
							<label htmlFor="location">Select Location</label>
							<input
								type="text"
								id="location"
								name="location"
								placeholder="Enter a place name, address or coordinates"
								style={{ width: "80%" }}
							/>
						</div>
					</div>
					<div
						className="budget-slider radius-slider"
						style={
							4 === selectedIndex1
								? {
										display: "block",
								  }
								: {
										display: "none",
								  }
						}
					>
						<div className="slider-div">
							<p>
								Select target radius:{" "}
								<span style={{ fontWeight: "500", opacity: "1" }}>
									{value1}
								</span>
							</p>
							<input
								type="range"
								min="1"
								max="30"
								value={value1}
								onChange={handleChange1}
								style={{ width: "100%" }}
							/>
							<br />
							<div className="slider-range">
								<p>1</p>
								<p>30</p>
							</div>
						</div>
					</div>
				</div>

				<Link to="/stepfour" className="continue step3-continue">
					Continue
				</Link>
			</div>
		</div>
	);
};

export default StepOne;
