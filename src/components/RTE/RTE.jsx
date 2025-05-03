import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ name, control, label, defaultValue = "" }) {
	return (
		<div>
			{label && <label>{label}</label>}
			<Controller
				name={name || "content"}
				control={control}
				render={({ field: { onChange } }) => (
					<Editor
						initialValue={defaultValue}
						apiKey="vqtfpq53rp622tl3gi87tb6w8a1vmlay8y4ck412cgkezru6"
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
		</div>
	);
}

export default RTE;
