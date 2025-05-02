import "./App.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-white via-white to-white overflow-hidden">
			{/* blurred floating shapes */}
			<div className="absolute top-[-100px] left-[-50px] w-[400px] h-[400px] bg-amber-300 opacity-20 rounded-full filter blur-3xl"></div>
			<div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-white opacity-10 rounded-full filter blur-3xl"></div>
			<div className="absolute top-[300px] right-[150px] w-[300px] h-[300px] bg-amber-300 opacity-20 rounded-full filter blur-2xl"></div>

			{/* main content */}
			<div className="relative z-10">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
}

export default App;
