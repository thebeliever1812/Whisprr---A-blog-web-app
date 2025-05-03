import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Footer } from "./components";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { authService } from "./appwrite";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
import "./Loader.css";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn)

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login(userData));
					navigate("/");
				} else {
					dispatch(logout());
					navigate("/");
				}
			})
			.catch((error) => console.log(error.message))
			.finally(() => setLoading(false));
	}, []);
	return (
		<>
			{loading ? (
				<div className="loader"></div>
			) : (
				<div className="relative min-h-screen bg-gradient-to-br from-white via-white to-white overflow-hidden ">
					{/* blurred floating shapes */}
					<div className="absolute top-[-100px] left-[-50px] w-[400px] h-[400px] bg-amber-300 opacity-20 rounded-full filter blur-3xl"></div>
					<div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-white opacity-10 rounded-full filter blur-3xl"></div>
					<div className="absolute top-[300px] right-[150px] w-[300px] h-[300px] bg-amber-300 opacity-20 rounded-full filter blur-2xl"></div>

					{/* main content */}
					<div className="relative z-10 flex flex-col min-h-screen">
						<Toaster position="top-right" />
						<Header />
						<main className="grow">
							<Outlet />
						</main>
						<Footer />
					</div>
				</div>
			)}
		</>
	);
}

export default App;
