import React, { forwardRef, useId } from "react";

function SelectStatus(
	{
		label = "",
		required = false,
		labelClass = "",
		selectClass = "",
		options,
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
				<select
					className={`py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${selectClass}`}
					{...props}
					ref={ref}
				>
					{options?.map((option) => (
						<option key={option.label} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default forwardRef(SelectStatus);
