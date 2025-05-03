import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiSignInBold } from "react-icons/pi";
import { logout } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import authService from "../../appwrite/auth";

function Navbar() {
	const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
	const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	async function handleLogout() {
		try {
			await authService.logoutUser();
			dispatch(logout());
			toast.success("Logout successful");
		} catch (error) {
			toast.error();
		}
	}

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY && currentScrollY > 50) {
			setShowNavbar(false); // scroll down → hide
		} else {
			setShowNavbar(true); // scroll up → show
		}
		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<header>
			<nav
				className={`flex w-full items-center sm:justify-around justify-between bg-gradient-to-r from-amber-50 to-white ${
					showNavbar ? "translate-y-0" : "-translate-y-full"
				} sm:text-black p-1 px-4 md:px-10 text-base md:text-lgz-50 shadow-md transition duration-300 fixed`}
			>
				{userLoggedIn ? (
					<>
						<Link
							to="/"
							className="logo max-w-30 sm:max-w-40  object-cover object-center"
						>
							<img src="/Logo.png" alt="" />
						</Link>

						<div className="outer-boundary hidden sm:flex items-center justify-between gap-10 border-2 border-amber-200 rounded-full p-0.5">
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
							onClick={handleLogout}
						>
							Logout
						</Link>

						<div
							className="hamburger-menu sm:hidden cursor-pointer"
							onClick={() => setHamburgerMenuStatus((prev) => !prev)}
						>
							{hamburgerMenuStatus ? "" : <RxHamburgerMenu />}
						</div>
					</>
				) : (
					<>
						<Link
							to="/"
							className="logo max-w-30 sm:max-w-40  object-cover object-center"
						>
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
							{hamburgerMenuStatus ? "" : <PiSignInBold />}
						</div>
					</>
				)}
			</nav>
			<div
				className={`flex flex-col justify-between sm:hidden expand-menu h-screen w-full ${
					hamburgerMenuStatus ? "open-menu" : "close-menu"
				} bg-[#080808] p-2 ps-5 z-50 px-4`}
			>
				{userLoggedIn ? (
					<>
						<div className="flex flex-col">
							<div
								className="hamburger-cross"
								onClick={() => setHamburgerMenuStatus((prev) => !prev)}
							>
								{hamburgerMenuStatus ? <RxCross2 /> : ""}
							</div>
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
								onClick={handleLogout}
							>
								Logout
							</Link>
						</div>
					</>
				) : (
					<>
						<div className="flex flex-col gap-5 justify-start mt-6">
							<div
								className="hamburger-cross"
								onClick={() => setHamburgerMenuStatus((prev) => !prev)}
							>
								{hamburgerMenuStatus ? <RxCross2 /> : ""}
							</div>
							<div className="flex justify-center">
								<Link
									to="/log-in"
									className="text-center menu-logout-btn logout-click"
								>
									Log in
								</Link>
							</div>

							<div className="flex justify-center">
								<Link
									to="/sign-up"
									className="text-center menu-logout-btn logout-click"
								>
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
