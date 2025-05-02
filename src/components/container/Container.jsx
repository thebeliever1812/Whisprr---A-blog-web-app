import React from "react";

function Container({ children }) {
	return (
		<div className="w-full max-w-6xl mx-auto py-2 px-3 sm:py-3 sm:px-5">
			{children}
		</div>
	);
}

export default Container;
