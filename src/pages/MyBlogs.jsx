import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { authService, databasesService } from "../appwrite";
import { Container, PostCard } from "../components";
import "../Loader.css";
import Masonry from "react-masonry-css";
import "./MyBlogs.css";
import { Query } from "appwrite";
import { Link } from "react-router-dom";

function MyBlogs() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	useEffect(() => {
		const fetchMyPosts = async () => {
			setLoading(true);
			try {
				const currUser = await authService.getCurrentUser();
				if (!currUser) {
					toast.error("You must be logged in to see your posts");
					setLoading(false);
					return;
				}
				const myPosts = await databasesService.getPosts([
					Query.equal("userId", currUser.$id),
					Query.orderDesc("$createdAt"),
				]);

				setPosts(myPosts.documents);
			} catch (error) {
				toast.error(`Error fetching posts: ${error.message}`);
			} finally {
				setLoading(false);
			}
		};

		fetchMyPosts();
	}, []);
	return (
		<Container>
			{loading ? (
				<div className="w-full flex justify-center mt-5">
					<div className="loader"></div>
				</div>
			) : (
				<>
					{posts?.length ? (
						<Masonry
							breakpointCols={breakpointColumnsObj}
							className="my-masonry-grid"
							columnClassName="my-masonry-grid_column"
						>
							{posts?.map((post) => (
								<div key={post.$id}>
									<PostCard {...post} showStatus={true}/>
								</div>
							))}
						</Masonry>
					) : (
						<div className="w-full flex flex-col items-center gap-20">
							<div className="text-2xl text-gray-800 sm:text-4xl font-extrabold roboto text-shadow-current text-shadow-sm mt-5">
								No Blogs Found
							</div>

							<div className="text-xl sm:text-2xl font-semibold ">
								Create Now!
								<div className="flex justify-center">
									<Link
										to="/add-blog"
										title="Add New Blog"
										className="group cursor-pointer outline-none hover:rotate-90 duration-300"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50px"
											height="50px"
											viewBox="0 0 24 24"
											className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
										>
											<path
												d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
												stroke-width="1.5"
											></path>
											<path d="M8 12H16" stroke-width="1.5"></path>
											<path d="M12 16V8" stroke-width="1.5"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</Container>
	);
}

export default MyBlogs;
