import React, { useCallback, useEffect, useState } from "react";
import { Container, Input, RTE, SelectStatus } from "../components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { storageService, databasesService } from "../appwrite";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import conf from "../conf/conf";

function AddBlog({ post }) {
	const userData = useSelector((state) => state.auth.userData);
	const [loading, setLoading] = useState(false);

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

	const navigate = useNavigate();

	const submit = async (data) => {
		try {
			setLoading(true);

			// Always generate final slug before submission
			// data.slug = slugTransform(data.title);

			// if (!data.slug) {
			// 	toast.error("Title is required to generate a slug.");
			// 	return;
			// }

			if (post) {
				let uploadedImageFile = post.image;

				const newImageFile = data?.image?.[0]
					? await storageService.uploadFile(data.image[0])
					: null;

				if (newImageFile) {
					await storageService.deleteFile(post.image);
					uploadedImageFile = newImageFile.$id;
				}

				const dbPost = await databasesService.updatePost(post.$id, {
					...data,
					image: uploadedImageFile,
				});

				if (dbPost) {
					toast.success("Blog updated successfully");
					navigate(`/post/${dbPost.$id}`);
				}
			} else {
				const imageFile = data?.image?.[0]
					? await storageService.uploadFile(data.image[0])
					: null;

				if (imageFile) {
					const imageFileId = imageFile.$id;

					const dbPost = await databasesService.createPost({
						...data,
						image: imageFileId,
						userId: userData.$id,
					});

					if (dbPost) {
						toast.success("Blog created successfully");
						navigate(`/post/${dbPost.$id}`);
					} else {
						toast.error("Failed to create blog post.");
					}
				}
			}
		} catch (error) {
			console.log(`addPost error : ${error.message}`);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const slugTransform = useCallback((value) => {
		if (value && typeof value === "string") {
			return value
				.trim()
				.toLowerCase()
				.replace(/[^a-zA-Z\d]+/g, "_")
				.replace(/^_+|_+$/g, "")
				.replace(/_+/g, "_");
		}
		return "";
	}, []);

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "title") {
				setValue("slug", slugTransform(value.title), { shouldValidate: true });
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, slugTransform, setValue]);

	return (
		<Container>
			<div className="bg-white w-full p-2 rounded-md shadow">
				<form onSubmit={handleSubmit(submit)}>
					<div className="sm:flex sm:gap-2 items-start">
						<div className="w-full sm:w-full sm:max-w-2/3">
							<Input
								label="Title :"
								type="text"
								placeholder="Blog Title here"
								required="true"
								labelClass="text-base sm:text-lg"
								{...register("title", { required: true, maxLength: 100 })}
								aria-invalid={errors.title ? "true" : "false"}
							/>
							{errors.title?.type === "required" ? (
								<p role="alert" className="text-red-500">
									Title is required
								</p>
							) : errors.title ? (
								<p role="alert" className="text-red-500">
									{errors.title.message}
								</p>
							) : null}

							<Input
								label="Slug :"
								type="text"
								placeholder="Slug here"
								labelClass="text-base sm:text-lg"
								inputClass="no-focus cursor-not-allowed"
								{...register("slug", { required: true, maxLength: 20 })}
								onInput={(e) => {
									setValue("slug", slugTransform(e.currentTarget.value), {
										shouldValidate: true,
									});
								}}
								disabled
							/>

							<RTE
								label="Content :"
								name="content"
								labelClass="text-base sm:text-lg"
								required
								control={control}
								defaultValue={getValues("content")}
								rules={{ required: true }}
								errors={errors}
							/>
						</div>

						<div className="w-full sm:w-full sm:max-w-1/3">
							<Input
								label="Upload image :"
								type="file"
								required
								labelClass="text-base sm:text-lg"
								inputClass="cursor-pointer"
								{...register("image", { required: !post })}
								aria-invalid={errors.image ? "true" : "false"}
							/>
							{errors.image?.type === "required" ? (
								<p role="alert" className="text-red-500">
									Image is required
								</p>
							) : errors.image ? (
								<p role="alert" className="text-red-500">
									{errors.image.message}
								</p>
							) : null}

							{post ? (
								<div className="w-full p-1 mb-3 sm:mb-4 rounded-md">
									<img
										src={`https://cloud.appwrite.io/v1/storage/buckets/${conf.appwriteBucketId}/files/${post.image}/view?project=${conf.appwriteProjectId}`}
										alt={post.title}
										className=""
									/>
								</div>
							) : null}

							<SelectStatus
								label="Status :"
								required
								labelClass="text-base sm:text-lg"
								selectClass="cursor-pointer"
								options={[
									{ label: "Select Active or Inactive", value: "" },
									{ label: "Active", value: "active" },
									{ label: "Inactive", value: "inactive" },
								]}
								{...register("status", { required: true })}
								aria-invalid={errors.status ? "true" : "false"}
							/>
							{errors.status?.type === "required" ? (
								<p role="alert" className="text-red-500">
									Status is required
								</p>
							) : errors.status ? (
								<p role="alert" className="text-red-500">
									{errors.status.message}
								</p>
							) : null}

							<button
								type="submit"
								disabled={loading}
								className={`w-full inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200  border-2 hover:border-[#7747FF] border-white ${
									loading ? "cursor-not-allowed" : "cursor-pointer"
								}`}
							>
								{loading
									? post
										? "Updating"
										: "Submitting"
									: post
									? "Update"
									: "Submit"}
							</button>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
}

export default AddBlog;
