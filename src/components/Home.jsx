import React from "react";
import { Container } from "./index";
import { useSelector } from "react-redux";
import "./Ecard.css";
import { Link } from "react-router-dom";
import { AllPosts } from "../pages";

function Home() {
	const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<div className="">
			{userLoggedIn ? (
				<div className="">
					<AllPosts />
				</div>
			) : (
				<div class="e-card playing flex flex-col items-center justify-center">
					{/* <div class="image"></div> */}
					<div className="wave"></div>
					<div className="wave"></div>
					<div className="wave"></div>
					<div className="flex flex-col items-center justify-center gap-1 py-3 roboto">
						<Link
							to="/log-in"
							className="infotop text-white z-10 text-2xl w-full px-1 hover:text-3xl duration-300"
						>
							Login now !
						</Link>
						<div className="name text-white z-10 w-full px-1 select-none">
							Please Login to see Blogs
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
