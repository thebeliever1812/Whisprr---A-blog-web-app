import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({
	name,
	control,
	label,
	defaultValue = "",
	labelClass,
	required = false,
	rules = {},
	errors = {},
}) {
	const [isEditorLoading, setIsEditorLoading] = useState(true);
	return (
		<>
			<div className="py-1 px-1 sm:py-1 sm:px-5">
				{label && (
					<label className={`${labelClass} `}>
						{label} {required && <span className="text-red-600">*</span>}
					</label>
				)}
			</div>

			<div className="w-full">
				{isEditorLoading && (
					<div className="loader-editor w-full flex justify-center">
						<div className="animate-pulse flex flex-col items-center gap-4 w-60">
							<div>
								<div className="w-48 h-6 bg-slate-400 rounded-md"></div>
								<div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
							</div>
							<div className="h-7 bg-slate-400 w-full rounded-md"></div>
							<div className="h-7 bg-slate-400 w-full rounded-md"></div>
							<div className="h-7 bg-slate-400 w-full rounded-md"></div>
							<div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
						</div>
					</div>
				)}
				<Controller
					name={name || "content"}
					control={control}
					rules={rules}
					render={({ field: { onChange } }) => (
						<Editor
							initialValue={defaultValue}
							apiKey="vqtfpq53rp622tl3gi87tb6w8a1vmlay8y4ck412cgkezru6"
							onInit={() => setIsEditorLoading(false)}
							init={{
								height: 500,
								plugins: [
									"advlist",
									"autolink",
									"lists",
									"link",
									"image",
									"charmap",
									"preview",
									"anchor",
									"searchreplace",
									"visualblocks",
									"code",
									"fullscreen",
									"insertdatetime",
									"media",
									"table",
									"code",
									"help",
									"wordcount",
								],
								toolbar:
									"undo redo | blocks | " +
									"bold italic forecolor | alignleft aligncenter " +
									"alignright alignjustify | bullist numlist outdent indent | " +
									"removeformat | help",
								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
								menubar: "file edit view insert format tools table help",
							}}
							onEditorChange={onChange}
						/>
					)}
				/>
				{errors?.[name] && (
					<p role="alert" className="text-red-600">
						{errors[name].type === "required"
							? "Content is required"
							: `${errors[name].message}`}
					</p>
				)}
			</div>
		</>
	);
}

export default RTE;
