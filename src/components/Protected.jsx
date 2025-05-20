import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Loader.css";

function Protected({ children, authRequired = true }) {
	const navigate = useNavigate();
	const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (authRequired && authRequired !== userLoggedIn) {
			navigate("/log-in");
		} else if (!authRequired && authRequired !== userLoggedIn) {
			navigate("/");
		}
        setLoading(false)
	}, [userLoggedIn, navigate, authRequired]);

	return (
		<>
			{loading ? (
				<div className="w-full flex justify-center mt-5">
					<div className="loader"></div>
				</div>
			) : (
				children
			)}
		</>
	);
}

export default Protected;
