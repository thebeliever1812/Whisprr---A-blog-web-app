import React, { forwardRef, useId } from "react";
import "./Input.css";

function Input(
	{
		label,
		type = "text",
		placeholder = "",
		labelClass = "",
		inputClass = "",
		required = false,
		...props
	},
	ref
) {
	const id = useId();
	return (
		<div className="my-4">
			<div className="py-1 px-1 sm:py-1 sm:px-5">
				{label && (
					<label htmlFor={id} className={`${labelClass} `}>
						{label} {required && <span className="text-red-600">*</span>}
					</label>
				)}
			</div>
			<div className="w-full">
				<input
					type={type}
					id={id}
					placeholder={placeholder}
					{...props}
					ref={ref}
					className={`${inputClass} w-full py-1 px-3 sm:py-2 sm:px-5 rounded-md input `}
				/>
			</div>
		</div>
	);
}

export default forwardRef(Input);
