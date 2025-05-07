import React from "react";
import { Link } from "react-router-dom";
import conf from "../conf/conf";

function PostCard({ $id, title, image, status, showStatus = false }) {
	return (
		<div className="mx-auto flex">
			<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
				<div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 object-cover object-center">
					<img
						src={`https://cloud.appwrite.io/v1/storage/buckets/${conf.appwriteBucketId}/files/${image}/view?project=${conf.appwriteProjectId}`}
						alt={`${title} image`}
						onError={(e) => (e.target.src = "/fallback.png")}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="p-6">
					<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 select-none">
						{title}
					</h5>
				</div>
				<div className="p-6 pt-0 flex justify-between items-center">
					<Link
						to={`/post/${$id}`}
						className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/30 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
						type="button"
					>
						View
					</Link>
					{showStatus ? (
						<div className="status-indicator">
							{status === "active" ? (
								<div className="size-2.5 bg-green-500 rounded-full shadow-[0_0_10px_4px_#00e600] "></div>
							) : (
								<div className="size-2.5 bg-red-500 rounded-full shadow-[0_0_10px_3px_#ff0000]"></div>
							)}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default PostCard;
