import React, { useState } from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
	const [selectedIndex, setSelectedIndex] = useState(null);

	const changeBackground = (ev, index) => {
		ev.preventDefault();
		setSelectedIndex(index);
	};

	// const dontReload = (ev) => {
	// 	ev.preventDefault();
	// };
	return (
		<div>
			<div className="above-content above-content-stepone ">
				<div className="above-text">
					<h1 className="campaign-list-title">Your ad campaign</h1>
					<h4 className="campaign-list-subtitle">
						Launch your ad in just 4 easy steps.
					</h4>
				</div>
				<div className="progress-bar-stepone ">
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
					<div className="progress-node stepone-node-two">
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.4467 6.50991H21.98L18.0367 2.56657C17.7217 2.25157 17.2083 2.25157 16.8817 2.56657C16.5667 2.88157 16.5667 3.39491 16.8817 3.72157L19.67 6.50991H8.33001L11.1183 3.72157C11.4333 3.40657 11.4333 2.89324 11.1183 2.56657C10.8033 2.25157 10.29 2.25157 9.96334 2.56657L6.03168 6.50991H5.56501C4.51501 6.50991 2.33334 6.50991 2.33334 9.49657C2.33334 10.6282 2.56668 11.3749 3.05668 11.8649C3.33668 12.1566 3.67501 12.3082 4.03668 12.3899C4.37501 12.4716 4.73668 12.4832 5.08668 12.4832H22.9133C23.275 12.4832 23.6133 12.4599 23.94 12.3899C24.92 12.1566 25.6667 11.4566 25.6667 9.49657C25.6667 6.50991 23.485 6.50991 22.4467 6.50991Z"
								fill="#ABB5C2"
							/>
							<path
								d="M22.225 14H5.68165C4.95832 14 4.40999 14.6417 4.52665 15.3533L5.50665 21.35C5.83332 23.3567 6.70832 25.6667 10.5933 25.6667H17.1383C21.07 25.6667 21.77 23.695 22.19 21.49L23.3683 15.3883C23.5083 14.665 22.96 14 22.225 14ZM12.3783 21.525C12.3783 21.98 12.0167 22.3417 11.5733 22.3417C11.1183 22.3417 10.7567 21.98 10.7567 21.525V17.675C10.7567 17.2317 11.1183 16.8583 11.5733 16.8583C12.0167 16.8583 12.3783 17.2317 12.3783 17.675V21.525ZM17.3717 21.525C17.3717 21.98 17.01 22.3417 16.555 22.3417C16.1117 22.3417 15.7383 21.98 15.7383 21.525V17.675C15.7383 17.2317 16.1117 16.8583 16.555 16.8583C17.01 16.8583 17.3717 17.2317 17.3717 17.675V21.525Z"
								fill="#ABB5C2"
							/>
						</svg>
					</div>
					<div className="progress-node stepone-node-three">
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
								fill="#ABB5C2"
							/>
						</svg>
					</div>
					<div className="progress-node stepone-node-four ">
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

			<div className="stepone-card">
				<div>
					<h4>
						What do you want to do? <span>(Step 1 of 4)</span>
					</h4>

					<hr />

					<div className="container stepone-cards">
						<div className="row">
							<div
								className="col"
								key={1}
								onClick={(ev) => changeBackground(ev, 1)}
								style={
									1 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								{" "}
								<svg
									key={1}
									style={
										1 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3.66667 0C1.64162 0 0 1.64162 0 3.66667V6.6C0 15.1052 6.89481 22 15.4 22H18.3333C20.3584 22 22 20.3584 22 18.3333V16.3064C22 15.4732 21.5292 14.7114 20.7839 14.3387L17.2405 12.567C16.043 11.9683 14.5929 12.569 14.1695 13.8391L13.7328 15.1492C13.5669 15.647 13.0562 15.9434 12.5417 15.8405C9.32108 15.1964 6.80364 12.6789 6.15952 9.45832C6.05661 8.94378 6.35295 8.43313 6.85076 8.26719L8.47675 7.7252C9.56734 7.36167 10.1942 6.21977 9.91536 5.10451L9.05584 1.66642C8.811 0.687054 7.93104 0 6.92153 0H3.66667Z"
										fill="#8b8b8b"
									/>
									<path
										d="M20.7481 0.214788L13.2 7.76291V4.4H11.7333V10.2667H17.6V8.8H14.2371L21.7852 1.25188L20.7481 0.214788Z"
										fill="#8b8b8b"
									/>
								</svg>
								<div>
									<h5>Get leads as calls</h5>
									<p>Reach broad audience and get leads through calls</p>
								</div>
							</div>
							<div
								className="col"
								key={2}
								onClick={(ev) => changeBackground(ev, 2)}
								style={
									2 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								{" "}
								<svg
									key={2}
									style={
										2 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.14622 19.8571H6.89622V19.1071H6.14622V19.8571ZM6.14622 25H5.39622C5.39622 25.284 5.55668 25.5437 5.81071 25.6708C6.06474 25.7978 6.36875 25.7705 6.59604 25.6001L6.14622 25ZM13.0079 19.8571V19.1071H12.758L12.558 19.257L13.0079 19.8571ZM7.86163 7.10713C7.44742 7.10713 7.11163 7.44291 7.11163 7.85713C7.11163 8.27134 7.44742 8.60713 7.86163 8.60713V7.10713ZM18.1541 8.60713C18.5683 8.60713 18.9041 8.27134 18.9041 7.85713C18.9041 7.44291 18.5683 7.10713 18.1541 7.10713V8.60713ZM7.86163 12.25C7.44742 12.25 7.11163 12.5858 7.11163 13C7.11163 13.4142 7.44742 13.75 7.86163 13.75V12.25ZM14.7233 13.75C15.1375 13.75 15.4733 13.4142 15.4733 13C15.4733 12.5858 15.1375 12.25 14.7233 12.25V13.75ZM5.39622 19.8571V25H6.89622V19.8571H5.39622ZM6.59604 25.6001L13.4577 20.4573L12.558 19.257L5.69641 24.3999L6.59604 25.6001ZM13.0079 20.6071H23.3003V19.1071H13.0079V20.6071ZM23.3003 20.6071C24.6627 20.6071 25.7657 19.5056 25.7657 18.1429H24.2657C24.2657 18.6762 23.8352 19.1071 23.3003 19.1071V20.6071ZM25.7657 18.1429V2.71426H24.2657V18.1429H25.7657ZM25.7657 2.71426C25.7657 1.35156 24.6627 0.25 23.3003 0.25V1.75C23.8352 1.75 24.2657 2.18095 24.2657 2.71426H25.7657ZM23.3003 0.25H2.71541V1.75H23.3003V0.25ZM2.71541 0.25C1.35305 0.25 0.25 1.35156 0.25 2.71426H1.75C1.75 2.18095 2.18052 1.75 2.71541 1.75V0.25ZM0.25 2.71426V18.1429H1.75V2.71426H0.25ZM0.25 18.1429C0.25 19.5056 1.35305 20.6071 2.71541 20.6071V19.1071C2.18052 19.1071 1.75 18.6762 1.75 18.1429H0.25ZM2.71541 20.6071H6.14622V19.1071H2.71541V20.6071ZM7.86163 8.60713H18.1541V7.10713H7.86163V8.60713ZM7.86163 13.75H14.7233V12.25H7.86163V13.75Z"
										fill="#8B8B8B"
									/>
								</svg>
								<div>
									<h5>Get leads as Facebook messages</h5>
									<p>Get more FB messages from leads</p>
								</div>
							</div>
							<div
								className="col"
								key={3}
								onClick={(ev) => changeBackground(ev, 3)}
								style={
									3 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								<svg
									key={3}
									style={
										3 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.8621 8.71931V17.2963M16.7241 13.0078H25M14.2414 6.14285C14.2414 8.98342 12.0185 11.2857 9.27586 11.2857C6.53324 11.2857 4.31034 8.98342 4.31034 6.14285C4.31034 3.30228 6.53324 1 9.27586 1C12.0185 1 14.2414 3.30228 14.2414 6.14285ZM17.5517 25L1 25C1 23.782 1 22.6232 1 21.5739C1 18.7317 3.22314 16.4286 5.96551 16.4286L12.5862 16.4286C15.3286 16.4286 17.5517 18.7317 17.5517 21.5739C17.5517 22.6232 17.5517 23.782 17.5517 25Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<div>
									<h5>Increase page followers</h5>
									<p>Encourage customers to follow your page</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div
								className="col"
								key={4}
								onClick={(ev) => changeBackground(ev, 4)}
								style={
									4 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								{" "}
								<svg
									key={4}
									style={
										4 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.2 23.2H23.2V20.8C23.2 18.5909 21.4091 16.8 19.2 16.8M13.6 5.59692C13.6 8.24639 11.4512 10.3938 8.8 10.3938C6.1488 10.3938 4 8.24639 4 5.59692C4 2.94745 6.1488 0.800049 8.8 0.800049C11.4512 0.800049 13.6 2.94745 13.6 5.59692ZM16.8 23.1855H0.799999C0.799999 22.0494 0.799999 20.9686 0.799999 19.9899C0.799999 17.3389 2.94903 15.1907 5.6 15.1907H12C14.651 15.1907 16.8 17.3389 16.8 19.9899C16.8 20.9686 16.8 22.0494 16.8 23.1855ZM18.4 13.6C16.6327 13.6 15.2 12.1674 15.2 10.4C15.2 8.63274 16.6327 7.20005 18.4 7.20005C20.1673 7.20005 21.6 8.63274 21.6 10.4C21.6 12.1674 20.1673 13.6 18.4 13.6Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
								<div>
									<h5>Get customer leads</h5>
									<p>Encourage customers to take action</p>
								</div>
							</div>
							<div
								className="col"
								key={5}
								onClick={(ev) => changeBackground(ev, 5)}
								style={
									5 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								<svg
									key={5}
									style={
										5 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 20C3.99996 20 0.799988 12 0.799988 12C0.799988 12 3.99996 4 12 4C20 4 23.2 12 23.2 12C23.2 12 20 20 12 20Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linejoin="round"
									/>
									<path
										d="M8.79999 12C8.79999 13.7673 10.2327 15.2 12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.79999 10.2327 8.79999 12Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linejoin="round"
									/>
								</svg>

								<div>
									<h5>Get more youtube views</h5>
									<p>Increase organic views by obtaining user attention </p>
								</div>
							</div>
							<div
								className="col"
								key={6}
								onClick={(ev) => changeBackground(ev, 6)}
								style={
									6 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								<svg
									key={6}
									style={
										6 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.52405 7.51117L1.23431 7.45263M7.91717 2.58322L7.97574 1.29269M3.98952 3.69813L2.75836 2.34906M2.28974 12.6733L3.63806 11.4413M11.7275 4.04936L13.0758 2.81737"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M6.26788 6.26807L14.019 24.3541L16.6027 16.6029L24.3539 14.0192L6.26788 6.26807Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linejoin="round"
									/>
								</svg>

								<div>
									<h5>Get more website traffic</h5>
									<p>Get the right people to visit your website</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div
								className="col"
								key={7}
								onClick={(ev) => changeBackground(ev, 7)}
								style={
									7 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								<svg
									key={7}
									style={
										7 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="26"
									height="25"
									viewBox="0 0 26 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 23.4H25M3.4 12.2V23.4M22.6 12.2V23.4M2.6 1H23.4M6.6 12.2V17H19.4V12.2M3.4 4.2H22.6L24.2 12.2H1.8L3.4 4.2Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<div>
									<h5>Increase live store traffic</h5>
									<p>Drive visits to local stores, restaurants & Dealerships</p>
								</div>
							</div>
							<div
								className="col"
								key={8}
								onClick={(ev) => changeBackground(ev, 8)}
								style={
									8 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								<svg
									key={8}
									style={
										8 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="25"
									height="28"
									viewBox="0 0 25 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 19.8571H12.1429M2.71429 25H16.4286C17.3753 25 18.1429 24.2325 18.1429 23.2857V2.71429C18.1429 1.76751 17.3753 1 16.4286 1H2.71429C1.76751 1 1 1.76751 1 2.71429V23.2857C1 24.2325 1.76751 25 2.71429 25Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9.93333 14.9L7 11.9666M9.93333 14.9L12.8667 11.9666M9.93333 14.9L9.93333 6"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<div>
									<h5>Increase your App installs</h5>
									<p>Get more installs, interactions for your app</p>
								</div>
							</div>
							<div
								className="col"
								key={9}
								onClick={(ev) => changeBackground(ev, 9)}
								style={
									9 === selectedIndex
										? {
												background: "rgba(231, 240, 255, 0.3)",
												border: "2px solid #0F6EFF",
										  }
										: {}
								}
							>
								<svg
									key={9}
									style={
										9 === selectedIndex
											? {
													display: "block",
											  }
											: {}
									}
									className="tick-circle"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
										fill="#0F6EFF"
										stroke="white"
									/>
									<path
										d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.21997 12.5301C6.92997 12.2401 6.92997 11.7601 7.21997 11.4701C7.50997 11.1801 7.98997 11.1801 8.27997 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
										fill="white"
									/>
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.6 2.40005H21.6V21.6C21.6 22.4837 20.8837 23.2 20 23.2H4.00002C3.11637 23.2 2.40002 22.4837 2.40002 21.6V2.40005H6.40002M7.20002 0.800049H16.8V4.00005C16.8 4.8837 16.0837 5.60005 15.2 5.60005H8.80002C7.91637 5.60005 7.20002 4.8837 7.20002 4.00005V0.800049Z"
										stroke="#8B8B8B"
										stroke-width="1.5"
									/>
									<path
										d="M6.39996 14.4001H17.6M13.8666 19.2001H17.6M6.39996 9.6001H10.1333"
										stroke="#8B8B8B"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>

								<div>
									<h5>Increase the catalogue sales</h5>
									<p>Drive the sales of your catalogue and get more leads</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Link to="/steptwo" className="continue">
				Continue
			</Link>
		</div>
	);
};

export default StepOne;
