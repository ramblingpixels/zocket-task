import React, { useState } from "react";
import { Link } from "react-router-dom";
import list1 from "../images/list-one.png";
import list2 from "../images/list-two.png";
import list3 from "../images/list-three.png";

const CampaignList = () => {
	const [selectedIndex, setSelectedIndex] = useState(2);
	const [isTrash, setIsTrash] = useState(false);

	// const trash = (ev) => {
	// 	ev.preventDefault();
	// 	setIsTrash(true);
	// };

	const changeToggle = (ev, index) => {
		ev.preventDefault();
		setSelectedIndex(index);
	};
	return (
		<div>
			<div className="above-content">
				<div className="above-text">
					<h1 className="campaign-list-title">Your Campaigns</h1>
					<h4 className="campaign-list-subtitle">
						Check the list of campaigns you have created
					</h4>
				</div>
				<Link to="/stepone" className="add-campaign ">
					<svg
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7 10.5H14"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.5 14V7"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					Create new campaign
				</Link>
			</div>
			<div className="campaign-list-card">
				<div className="search-filter">
					<form className="search-form">
						<button className="search-btn" type="submit">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
									stroke="#808080"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
									stroke="#808080"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
						<input
							className="search-field"
							type="text"
							placeholder="Search for a campaign..."
						/>
					</form>
					<div className="filters">
						<div>
							<label for="platform">Platform:</label>
							<select name="platform" id="platform">
								<option value="all">All Platforms</option>
								<option value="facebook">Facebook</option>
								<option value="youtube">Youtube</option>
								<option value="google">Google</option>
								<option value="instagram">Instagram</option>
							</select>
							<label for="status">Status:</label>
							<select name="status" id="Status">
								<option value="all">All Statuses</option>
								<option value="live">Live</option>
								<option value="paused">Paused</option>
								<option value="exhausted">Exhausted</option>
							</select>
							<label for="date-range">Date Range:</label>
							<select name="date-range" id="date-range">
								<option value="30">Last 30 days</option>
								<option value="20">Last 20 days</option>
								<option value="10">Last 10 days</option>
							</select>
						</div>
					</div>
				</div>
				<div className="campaign-list">
					<table>
						<tr className="table-headers">
							<th>
								<input type="radio" />
							</th>
							<th>On/Off</th>
							<th>Campaign</th>
							<th>Data Range</th>
							<th>Clicks</th>
							<th>Budget</th>
							<th>Location</th>
							<th>Platform</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>

						<tr className="list-content">
							<td>
								<input type="radio" />
							</td>
							<td toggle-btn>
								<svg
									key={1}
									onClick={(ev) => changeToggle(ev, 1)}
									style={
										1 === selectedIndex
											? {
													display: "none",
											  }
											: {}
									}
									className="toggle-on"
									width="38"
									height="20"
									viewBox="0 0 38 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="37.567"
										height="19.2651"
										rx="9.63257"
										fill="#0F6EFF"
									/>
									<g filter="url(#filter0_d_131_1478)">
										<circle
											cx="27.9345"
											cy="9.63245"
											r="8.66931"
											fill="white"
										/>
									</g>
									<path
										d="M31.7875 9.63184L24.0815 9.63318"
										stroke="#004AD7"
										stroke-width="1.44489"
										stroke-linecap="round"
									/>
									<path
										d="M27.9345 5.7793V13.4854"
										stroke="#004AD7"
										stroke-width="1.44489"
										stroke-linecap="round"
									/>
									<defs>
										<filter
											id="filter0_d_131_1478"
											x="18.3019"
											y="0.481506"
											width="19.2651"
											height="19.2651"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="0.481628" />
											<feGaussianBlur stdDeviation="0.481628" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_131_1478"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_131_1478"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
								<svg
									key={2}
									onClick={(ev) => changeToggle(ev, 2)}
									style={
										2 === selectedIndex
											? {
													display: "none",
											  }
											: {}
									}
									className="toggle-off"
									width="37"
									height="19"
									viewBox="0 0 37 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_131_1490)">
										<rect
											width="37"
											height="18.9744"
											rx="9.48718"
											fill="#DADEE3"
										/>
										<g filter="url(#filter0_i_131_1490)">
											<path
												d="M0 0L0.00023718 0L0.00023718 18.9744H0L0 0Z"
												fill="#004AD7"
											/>
										</g>
										<g filter="url(#filter1_d_131_1490)">
											<circle
												cx="9.48715"
												cy="9.48719"
												r="8.53846"
												fill="white"
											/>
										</g>
										<path
											d="M5.69237 9.48706H13.2821"
											stroke="#DADEE3"
											stroke-width="1.42308"
											stroke-linecap="round"
										/>
										<path
											d="M5.69237 9.48706H13.2821"
											stroke="#DADEE3"
											stroke-width="1.42308"
											stroke-linecap="round"
										/>
									</g>
									<defs>
										<filter
											id="filter0_i_131_1490"
											x="0"
											y="0"
											width="0.000236511"
											height="18.9744"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset />
											<feGaussianBlur stdDeviation="1.06731" />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="shape"
												result="effect1_innerShadow_131_1490"
											/>
										</filter>
										<filter
											id="filter1_d_131_1490"
											x="-2.563e-05"
											y="0.474371"
											width="18.9744"
											height="18.9743"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="0.474359" />
											<feGaussianBlur stdDeviation="0.474359" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_131_1490"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_131_1490"
												result="shape"
											/>
										</filter>
										<clipPath id="clip0_131_1490">
											<rect
												width="37"
												height="18.9744"
												rx="9.48718"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</td>
							<td className="list-campaign-item">
								<img src={list1} alt="" />
								<div>
									Bluberry cake Campaign
									<p>Created on 14 july</p>
								</div>
							</td>
							<td>25 jul 2020 - 01 Aug 2020</td>
							<td>300</td>
							<td>INR.3,400</td>
							<td>Chennai</td>
							<td>
								<svg
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11 21.9999C17.0751 21.9999 22 17.0751 22 11C22 4.92486 17.0751 0 11 0C4.92487 0 0 4.92486 0 11C0 17.0751 4.92487 21.9999 11 21.9999Z"
										fill="#1977F3"
									/>
									<path
										d="M15.2818 14.1803L15.7691 10.9999H12.7186V8.93634C12.7186 8.06699 13.144 7.21774 14.5114 7.21774H15.899V4.51067C15.899 4.51067 14.6398 4.29565 13.4363 4.29565C10.9242 4.29565 9.28137 5.8178 9.28137 8.57592V10.9999H6.48767V14.1803H9.28137V21.8668C9.84135 21.955 10.4152 21.9999 11 21.9999C11.5847 21.9999 12.1586 21.9535 12.7186 21.8668V14.1803H15.2818Z"
										fill="white"
									/>
								</svg>
							</td>
							<td>
								{" "}
								<p className="status-one">Live now</p>{" "}
							</td>
							<td>
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.6026 3.15007L4.4188 10.7538C4.14755 11.0426 3.88505 11.6113 3.83255 12.0051L3.5088 14.8401C3.39505 15.8638 4.13005 16.5638 5.14505 16.3888L7.96255 15.9076C8.3563 15.8376 8.90755 15.5488 9.1788 15.2513L16.3626 7.64757C17.6051 6.33507 18.1651 4.83882 16.2313 3.01007C14.3063 1.19882 12.8451 1.83757 11.6026 3.15007Z"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10.4038 4.4187C10.7801 6.8337 12.7401 8.67995 15.1726 8.92495"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M2.625 19.25H18.375"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.375 5.23242C15.4613 4.94367 12.53 4.79492 9.6075 4.79492C7.875 4.79492 6.1425 4.88242 4.41 5.05742L2.625 5.23242"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7.4375 4.34875L7.63 3.2025C7.77 2.37125 7.875 1.75 9.35375 1.75H11.6463C13.125 1.75 13.2387 2.40625 13.37 3.21125L13.5625 4.34875"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.4937 7.99756L15.925 16.8088C15.8287 18.1826 15.75 19.2501 13.3087 19.2501H7.69122C5.24998 19.2501 5.17123 18.1826 5.07498 16.8088L4.50623 7.99756"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9.0387 14.4375H11.9524"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8.3125 10.9375H12.6875"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</td>
						</tr>
						<tr className="list-content">
							<td>
								<input type="radio" />
							</td>
							<td toggle-btn>
								<svg
									key={1}
									onClick={(ev) => changeToggle(ev, 1)}
									style={
										1 === selectedIndex
											? {
													display: "none",
											  }
											: {}
									}
									className="toggle-on"
									width="38"
									height="20"
									viewBox="0 0 38 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="37.567"
										height="19.2651"
										rx="9.63257"
										fill="#0F6EFF"
									/>
									<g filter="url(#filter0_d_131_1478)">
										<circle
											cx="27.9345"
											cy="9.63245"
											r="8.66931"
											fill="white"
										/>
									</g>
									<path
										d="M31.7875 9.63184L24.0815 9.63318"
										stroke="#004AD7"
										stroke-width="1.44489"
										stroke-linecap="round"
									/>
									<path
										d="M27.9345 5.7793V13.4854"
										stroke="#004AD7"
										stroke-width="1.44489"
										stroke-linecap="round"
									/>
									<defs>
										<filter
											id="filter0_d_131_1478"
											x="18.3019"
											y="0.481506"
											width="19.2651"
											height="19.2651"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="0.481628" />
											<feGaussianBlur stdDeviation="0.481628" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_131_1478"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_131_1478"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
								<svg
									key={2}
									onClick={(ev) => changeToggle(ev, 2)}
									style={
										2 === selectedIndex
											? {
													display: "none",
											  }
											: {}
									}
									className="toggle-off"
									width="37"
									height="19"
									viewBox="0 0 37 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_131_1490)">
										<rect
											width="37"
											height="18.9744"
											rx="9.48718"
											fill="#DADEE3"
										/>
										<g filter="url(#filter0_i_131_1490)">
											<path
												d="M0 0L0.00023718 0L0.00023718 18.9744H0L0 0Z"
												fill="#004AD7"
											/>
										</g>
										<g filter="url(#filter1_d_131_1490)">
											<circle
												cx="9.48715"
												cy="9.48719"
												r="8.53846"
												fill="white"
											/>
										</g>
										<path
											d="M5.69237 9.48706H13.2821"
											stroke="#DADEE3"
											stroke-width="1.42308"
											stroke-linecap="round"
										/>
										<path
											d="M5.69237 9.48706H13.2821"
											stroke="#DADEE3"
											stroke-width="1.42308"
											stroke-linecap="round"
										/>
									</g>
									<defs>
										<filter
											id="filter0_i_131_1490"
											x="0"
											y="0"
											width="0.000236511"
											height="18.9744"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset />
											<feGaussianBlur stdDeviation="1.06731" />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="shape"
												result="effect1_innerShadow_131_1490"
											/>
										</filter>
										<filter
											id="filter1_d_131_1490"
											x="-2.563e-05"
											y="0.474371"
											width="18.9744"
											height="18.9743"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="0.474359" />
											<feGaussianBlur stdDeviation="0.474359" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_131_1490"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_131_1490"
												result="shape"
											/>
										</filter>
										<clipPath id="clip0_131_1490">
											<rect
												width="37"
												height="18.9744"
												rx="9.48718"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</td>
							<td className="list-campaign-item">
								<img src={list2} alt="" />
								<div>
									Chocolate cake campaign
									<p>Created on 20 Jan</p>
								</div>
							</td>
							<td>25 jul 2020 - 01 Aug 2020</td>
							<td>210</td>
							<td>INR.3,400</td>
							<td>Coimbatore</td>
							<td>
								<svg
									width="26"
									height="18"
									viewBox="0 0 26 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.16 12.3201L17.08 8.74013L10.16 5.13013V12.3201Z"
										fill="white"
									/>
									<path
										d="M25.3301 3.88C25.3301 3.88 25.0802 2.12 24.3105 1.34C23.3409 0.32 22.2513 0.32 21.7415 0.26C18.173 0 12.805 0 12.805 0H12.795C12.795 0 7.4271 0 3.8385 0.26C3.3387 0.32 2.2491 0.32 1.2695 1.34C0.5098 2.12 0.2599 3.88 0.2599 3.88C0.2599 3.88 0 5.96 0 8.03V9.97C0 12.04 0.2599 14.11 0.2599 14.11C0.2599 14.11 0.5098 15.87 1.2795 16.65C2.2491 17.67 3.5286 17.64 4.0984 17.74C6.1476 17.94 12.795 18 12.795 18C12.795 18 18.1729 17.99 21.7515 17.73C22.2513 17.67 23.3409 17.67 24.3205 16.65C25.0902 15.87 25.3401 14.11 25.3401 14.11C25.3401 14.11 25.6 12.04 25.6 9.97V8.03C25.59 5.96 25.3301 3.88 25.3301 3.88ZM10.1561 12.32V5.13L17.0733 8.74L10.156 12.32H10.1561Z"
										fill="#E52D27"
									/>
								</svg>
							</td>
							<td>
								{" "}
								<p className="status-two">Paused</p>{" "}
							</td>
							<td>
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.6026 3.15007L4.4188 10.7538C4.14755 11.0426 3.88505 11.6113 3.83255 12.0051L3.5088 14.8401C3.39505 15.8638 4.13005 16.5638 5.14505 16.3888L7.96255 15.9076C8.3563 15.8376 8.90755 15.5488 9.1788 15.2513L16.3626 7.64757C17.6051 6.33507 18.1651 4.83882 16.2313 3.01007C14.3063 1.19882 12.8451 1.83757 11.6026 3.15007Z"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10.4038 4.4187C10.7801 6.8337 12.7401 8.67995 15.1726 8.92495"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M2.625 19.25H18.375"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.375 5.23242C15.4613 4.94367 12.53 4.79492 9.6075 4.79492C7.875 4.79492 6.1425 4.88242 4.41 5.05742L2.625 5.23242"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7.4375 4.34875L7.63 3.2025C7.77 2.37125 7.875 1.75 9.35375 1.75H11.6463C13.125 1.75 13.2387 2.40625 13.37 3.21125L13.5625 4.34875"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.4937 7.99756L15.925 16.8088C15.8287 18.1826 15.75 19.2501 13.3087 19.2501H7.69122C5.24998 19.2501 5.17123 18.1826 5.07498 16.8088L4.50623 7.99756"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9.0387 14.4375H11.9524"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8.3125 10.9375H12.6875"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</td>
						</tr>
						<tr className="list-content">
							<td>
								<input type="radio" />
							</td>
							<td toggle-btn>
								<svg
									key={1}
									onClick={(ev) => changeToggle(ev, 1)}
									style={
										1 === selectedIndex
											? {
													display: "none",
											  }
											: {}
									}
									className="toggle-on"
									width="38"
									height="20"
									viewBox="0 0 38 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="37.567"
										height="19.2651"
										rx="9.63257"
										fill="#0F6EFF"
									/>
									<g filter="url(#filter0_d_131_1478)">
										<circle
											cx="27.9345"
											cy="9.63245"
											r="8.66931"
											fill="white"
										/>
									</g>
									<path
										d="M31.7875 9.63184L24.0815 9.63318"
										stroke="#004AD7"
										stroke-width="1.44489"
										stroke-linecap="round"
									/>
									<path
										d="M27.9345 5.7793V13.4854"
										stroke="#004AD7"
										stroke-width="1.44489"
										stroke-linecap="round"
									/>
									<defs>
										<filter
											id="filter0_d_131_1478"
											x="18.3019"
											y="0.481506"
											width="19.2651"
											height="19.2651"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="0.481628" />
											<feGaussianBlur stdDeviation="0.481628" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_131_1478"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_131_1478"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
								<svg
									key={2}
									onClick={(ev) => changeToggle(ev, 2)}
									style={
										2 === selectedIndex
											? {
													display: "none",
											  }
											: {}
									}
									className="toggle-off"
									width="37"
									height="19"
									viewBox="0 0 37 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_131_1490)">
										<rect
											width="37"
											height="18.9744"
											rx="9.48718"
											fill="#DADEE3"
										/>
										<g filter="url(#filter0_i_131_1490)">
											<path
												d="M0 0L0.00023718 0L0.00023718 18.9744H0L0 0Z"
												fill="#004AD7"
											/>
										</g>
										<g filter="url(#filter1_d_131_1490)">
											<circle
												cx="9.48715"
												cy="9.48719"
												r="8.53846"
												fill="white"
											/>
										</g>
										<path
											d="M5.69237 9.48706H13.2821"
											stroke="#DADEE3"
											stroke-width="1.42308"
											stroke-linecap="round"
										/>
										<path
											d="M5.69237 9.48706H13.2821"
											stroke="#DADEE3"
											stroke-width="1.42308"
											stroke-linecap="round"
										/>
									</g>
									<defs>
										<filter
											id="filter0_i_131_1490"
											x="0"
											y="0"
											width="0.000236511"
											height="18.9744"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset />
											<feGaussianBlur stdDeviation="1.06731" />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="shape"
												result="effect1_innerShadow_131_1490"
											/>
										</filter>
										<filter
											id="filter1_d_131_1490"
											x="-2.563e-05"
											y="0.474371"
											width="18.9744"
											height="18.9743"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB"
										>
											<feFlood flood-opacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="0.474359" />
											<feGaussianBlur stdDeviation="0.474359" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_131_1490"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_131_1490"
												result="shape"
											/>
										</filter>
										<clipPath id="clip0_131_1490">
											<rect
												width="37"
												height="18.9744"
												rx="9.48718"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</td>
							<td className="list-campaign-item">
								<img src={list3} alt="" />
								<div>
									Browine cake campaign
									<p>Created on 12 June</p>
								</div>
							</td>
							<td>25 jul 2020 - 01 Aug 2020</td>
							<td>123</td>
							<td>INR.3,400</td>
							<td>Erode</td>
							<td>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M19.6001 10.2273C19.6001 9.51825 19.5365 8.83643 19.4183 8.18188H10.0001V12.0501H15.382C15.1501 13.3001 14.4456 14.3592 13.3865 15.0683V17.5774H16.6183C18.5092 15.8364 19.6001 13.2728 19.6001 10.2273Z"
										fill="#4285F4"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9.99937 20.0002C12.6994 20.0002 14.963 19.1047 16.6176 17.5774L13.3857 15.0683C12.4903 15.6683 11.3448 16.0229 9.99937 16.0229C7.39482 16.0229 5.19027 14.2638 4.4039 11.9001H1.06299V14.4911C2.70845 17.7593 6.09027 20.0002 9.99937 20.0002Z"
										fill="#34A853"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M4.40456 11.9C4.20456 11.3 4.09092 10.659 4.09092 9.99995C4.09092 9.34086 4.20456 8.69995 4.40456 8.09995V5.50903H1.06364C0.386365 6.85904 0 8.38631 0 9.99995C0 11.6136 0.386365 13.1409 1.06364 14.4909L4.40456 11.9Z"
										fill="#FBBC05"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9.99937 3.97728C11.4676 3.97728 12.7857 4.48183 13.8221 5.47274L16.6903 2.60455C14.9585 0.990911 12.6948 0 9.99937 0C6.09027 0 2.70845 2.24091 1.06299 5.5091L4.4039 8.10002C5.19027 5.73638 7.39482 3.97728 9.99937 3.97728Z"
										fill="#EA4335"
									/>
								</svg>
							</td>
							<td>
								{" "}
								<p className="status-three">Live now</p>{" "}
							</td>
							<td>
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.6026 3.15007L4.4188 10.7538C4.14755 11.0426 3.88505 11.6113 3.83255 12.0051L3.5088 14.8401C3.39505 15.8638 4.13005 16.5638 5.14505 16.3888L7.96255 15.9076C8.3563 15.8376 8.90755 15.5488 9.1788 15.2513L16.3626 7.64757C17.6051 6.33507 18.1651 4.83882 16.2313 3.01007C14.3063 1.19882 12.8451 1.83757 11.6026 3.15007Z"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10.4038 4.4187C10.7801 6.8337 12.7401 8.67995 15.1726 8.92495"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M2.625 19.25H18.375"
										stroke="#0F6EFF"
										stroke-width="1.5"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<svg
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.375 5.23242C15.4613 4.94367 12.53 4.79492 9.6075 4.79492C7.875 4.79492 6.1425 4.88242 4.41 5.05742L2.625 5.23242"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7.4375 4.34875L7.63 3.2025C7.77 2.37125 7.875 1.75 9.35375 1.75H11.6463C13.125 1.75 13.2387 2.40625 13.37 3.21125L13.5625 4.34875"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.4937 7.99756L15.925 16.8088C15.8287 18.1826 15.75 19.2501 13.3087 19.2501H7.69122C5.24998 19.2501 5.17123 18.1826 5.07498 16.8088L4.50623 7.99756"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9.0387 14.4375H11.9524"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8.3125 10.9375H12.6875"
										stroke="#FC3F3F"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CampaignList;
