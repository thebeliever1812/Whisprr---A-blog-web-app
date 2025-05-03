import React from "react";
import { Container, Input } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddBlog({ post }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		watch,
		getValues,
	} = useForm({
		defaultValues: {
			title: post?.title || "",
			slug: post?.slug || "",
			content: post?.content || "",
			status: post?.status || "",
		},
	});

	const navigate = useNavigate()

	const submit = () => {};

	return (
		<Container>
			<div className="bg-white w-full p-2 rounded-md">
				<form onSubmit={handleSubmit(submit)}>
					<Input
						label="Title :"
						type="text"
						placeholder="Blog Title here"
						required="true"
						labelClass="text-base sm:text-lg"
						{...register("title", { required: true, maxLength: 20 })}
						aria-invalid={errors.title ? "true" : "false"}
					/>
					{errors.title?.type === "required" ? (
						<p role="alert" className="text-red-500">
							Title is required
						</p>
					) : errors.mail ? (
						<p role="alert" className="text-red-500">
							{errors.mail.message}
						</p>
					) : null}
				</form>
			</div>
		</Container>
	);
}

export default AddBlog;
