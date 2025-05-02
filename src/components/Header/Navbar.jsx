import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiSignInBold } from "react-icons/pi";
import { logout } from "../../features/auth/authSlice";

function Navbar() {
	const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
	const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	return (
		<header>
			<nav
				className={`flex w-full items-center sm:justify-around justify-between ${
					hamburgerMenuStatus ? "bg-[#080808] text-white" : "backdrop-blur-sm"
				} sm:bg-transparent sm:text-black p-1 px-4  md:px-10 text-base md:text-lg`}
			>
				{userLoggedIn ? (
					<>
						<Link to="/" className="logo max-w-28">
							<img src="/Logo.png" alt="" className="object-cover" />
						</Link>

						<div className="hidden sm:flex items-center justify-between gap-10 border-2 border-amber-200  rounded-full p-0.5">
							<NavLink
								to="/"
								className={({ isActive }) =>
									`${isActive ? "text-amber-400" : "text-black"} nav-btns`
								}
							>
								Home
							</NavLink>
							<NavLink
								to="/my-blogs"
								className={({ isActive }) =>
									`${isActive ? "text-amber-400" : "text-black"} nav-btns`
								}
							>
								My Blogs
							</NavLink>
							<NavLink
								to="/add-blog"
								className={({ isActive }) =>
									`${isActive ? "text-amber-400" : "text-black"} nav-btns`
								}
							>
								Add Blog
							</NavLink>
						</div>

						<Link
							to="/"
							className="logout-btn hidden sm:inline-block"
							onClick={() => dispatch(logout())}
						>
							Logout
						</Link>

						<div
							className="hamburger-menu sm:hidden cursor-pointer"
							onClick={() => setHamburgerMenuStatus((prev) => !prev)}
						>
							{hamburgerMenuStatus ? <RxCross2 /> : <RxHamburgerMenu />}
						</div>
					</>
				) : (
					<>
						<Link to="/" className="logo max-w-28">
							<img src="/Logo.png" alt="" className="object-cover" />
						</Link>

						<div className="flex gap-1 sm:gap-5">
							<Link to="/log-in" className="signIn-btn hidden sm:inline-block">
								Log in
							</Link>

							<Link to="/sign-up" className="signIn-btn hidden sm:inline-block">
								Sign Up
							</Link>
						</div>

						<div
							className="hamburger-menu sm:hidden cursor-pointer"
							onClick={() => setHamburgerMenuStatus((prev) => !prev)}
						>
							{hamburgerMenuStatus ? <RxCross2 /> : <PiSignInBold />}
						</div>
					</>
				)}
			</nav>
			<div
				className={`flex flex-col justify-between sm:hidden expand-menu h-screen w-full ${
					hamburgerMenuStatus ? "open-menu" : "close-menu"
				} bg-[#080808] p-2 ps-5  px-4`}
			>
				{userLoggedIn ? (
					<>
						<div className="flex flex-col">
							<NavLink
								to="/"
								className="menu-btns"
								onClick={() => setHamburgerMenuStatus((prev) => !prev)}
							>
								Home
							</NavLink>
							<NavLink
								to="/my-blogs"
								className="menu-btns"
								onClick={() => setHamburgerMenuStatus((prev) => !prev)}
							>
								My Blogs
							</NavLink>
							<NavLink
								to="/add-blog"
								className="menu-btns"
								onClick={() => setHamburgerMenuStatus((prev) => !prev)}
							>
								Add Blog
							</NavLink>
						</div>

						<div className=" flex justify-center mb-16">
							<Link
								to="/"
								className="menu-logout-btn logout-click text-center"
								onClick={() => dispatch(logout())}
							>
								Logout
							</Link>
						</div>
					</>
				) : (
					<>
						<div className="flex flex-col gap-5 justify-start mt-6">
							<div className="flex justify-center">
								<Link to="/log-in" className="menu-logout-btn logout-click">
									Log in
								</Link>
							</div>

							<div className="flex justify-center">
								<Link to="/sign-up" className="menu-logout-btn logout-click">
									Sign Up
								</Link>
							</div>
						</div>
					</>
				)}
			</div>
		</header>
	);
}

export default Navbar;
