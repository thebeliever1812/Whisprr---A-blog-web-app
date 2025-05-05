import React from "react";
import { Container } from "./index";
import { storageService, databasesService } from "../appwrite";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PostCard() {
	const userData = useSelector((state) => state.auth.userData)
	
	const slug = useParams()


	return (
		<Container>
			<div className="flex items-start justify-center mt-4">
				<div className="flex flex-col max-w-2xl rounded-xl bg-white text-gray-700 shadow-md">
					<div className="overflow-hidden rounded-t-xl">
						<img
							src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
							alt="ui/ux review check"
							className="w-full object-cover"
						/>
					</div>

					<div className="p-6 flex flex-col gap-3">
						<h4 className="text-2xl font-semibold text-blue-gray-900">
							UI/UX Review Check
						</h4>
						<p className="text-xl text-gray-700">
							Because it's about motivating the doers. Because I'm here to
							follow my dreams and inspire others.
						</p>
					</div>

					<div className="profile-name-container flex justify-between items-center p-6">
						<div className="flex gap-2">
							
						</div>
						<p className="text-base text-gray-700">January 10</p>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default PostCard;
