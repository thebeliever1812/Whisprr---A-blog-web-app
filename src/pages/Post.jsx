import React, { useEffect, useState } from "react";
import { databasesService } from "../appwrite";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import parse from "html-react-parser";
import "../Loader.css";
import conf from "../conf/conf";

function Post() {
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		if (slug) {
			databasesService
				.getPost(slug)
				.then((post) => {
					if (post) {
						setPost(post);
					} else {
						toast.error("Post not found");
						navigate("/");
					}
				})
				.catch((error) => toast.error(`Error : ${error.message}`));
		} else {
			toast.error("No slug found");
			navigate("/");
		}
	}, [slug, navigate]);

	const imageUrl =
		post && post.image
			? `https://cloud.appwrite.io/v1/storage/buckets/${conf.appwriteBucketId}/files/${post.image}/view?project=${conf.appwriteProjectId}`
			: "/fallback.png";

	return (
	<div className="my-20 px-2">
			{post ? (
				<div className="flex items-start justify-center mt-4">
					<div className="flex flex-col max-w-2xl rounded-xl bg-white text-gray-700 shadow-md">
						<div className="overflow-hidden rounded-t-xl">
							<img src={imageUrl} className="w-full object-cover" />
						</div>

						<div className="p-6 flex flex-col gap-3">
							<h4 className="text-2xl font-semibold text-blue-gray-900">
								{post.title}
							</h4>
							<div className="text-xl text-gray-700">{parse(post.content)}</div>
						</div>

						<div className="profile-name-container flex justify-between items-center p-6">
							<div className="flex gap-2"></div>
							<p className="text-base text-gray-700">
								{new Date(post.createdAt).toLocaleDateString("en-IN", {
									day: "numeric",
									month: "short",
									year: "numeric",
								})}
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full flex justify-center ">
					<div className=" max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400">
						<div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
							<svg
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-10 h-10 text-gray-200 dark:text-gray-600"
							>
								<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
								<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
							</svg>
						</div>
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
						<div className="flex items-center mt-4">
							<svg
								viewBox="0 0 20 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
							>
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
							</svg>
							<div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
								<div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
							</div>
						</div>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default Post;
