import React from "react";

function Button({ children, type = "button", className = "", ...props }) {
	return (
		<button
			type={type}
			className={`relative overflow-hidden group border-2 border-gray-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 mx-auto text-base sm:text-lg font-semibold backdrop-blur-md bg-gray-100 text-gray-800 hover:text-white ${className} `}
			{...props}
		>
			{/* background sweep */}
			<span className="absolute inset-[2px] w-0 h-[calc(100%-4px)] bg-black transition-all duration-500 ease-in-out group-hover:w-[calc(100%-4px)] rounded-full z-0"></span>

			{/* content */}
			<span className="relative z-10 flex items-center gap-2">
				{children}
				<svg
					className="w-7 h-7 p-1.5 sm:w-8 sm:h-8 sm:p-2 border border-gray-700 rounded-full transition-all duration-300 ease-linear group-hover:rotate-90 group-hover:bg-gray-50 group-hover:border-none"
					viewBox="0 0 16 19"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
						className="fill-gray-800 group-hover:fill-gray-800"
					></path>
				</svg>
			</span>
		</button>
	);
}

export default Button;
