import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="bg-black text-white text-sm sm:text-base w-full px-3 py-3 sm:px-4 sm:py-6">
				<div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-around gap-3 sm:gap-20">
					<Link className="logo w-7 h-7 sm:w-10 sm:h-10 object-cover">
						<img src="/small_logo.png" alt="Logo" />
					</Link>

					<div className="footer-content flex items-start justify-between sm:justify-between w-full flex-wrap sm:max-w-5xl">
						<div className="footer-head-div">
							<span className="footer-heading">About</span>
							<ul className="footer-sub-heading-container">
								<Link className="footer-sub-heading">What is Whisprr?</Link>
								<Link className="footer-sub-heading">Meet the Creator</Link>
								<Link className="footer-sub-heading">Mission & Vision</Link>
							</ul>
						</div>

						<div className="footer-head-div">
							<span className="footer-heading">Suppport</span>
							<ul className="footer-sub-heading-container">
								<Link className="footer-sub-heading">Account</Link>
								<Link className="footer-sub-heading">Help</Link>
								<Link className="footer-sub-heading">Contact Me</Link>
								<Link className="footer-sub-heading">Feedback</Link>
							</ul>
						</div>

						<div className="footer-head-div">
							<span className="footer-heading">Legals</span>
							<ul className="footer-sub-heading-container">
								<Link className="footer-sub-heading">Terms & Conditions</Link>
								<Link className="footer-sub-heading">Privacy Policy</Link>
								<Link className="footer-sub-heading">Licensing</Link>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright text-center w-full mt-1 sm:mt-2 select-none">
					&#169; 2025 Whisprr. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
