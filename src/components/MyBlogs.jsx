import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { authService, databasesService } from "../appwrite";
import { Container, PostCard } from "../components";
import "../Loader.css";
import Masonry from "react-masonry-css";
import "./MyBlogs.css";
import { Query } from "appwrite";

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
				<div className="loader"></div>
			) : (
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{posts?.map((post) => (
						<div key={post.$id}>
							<PostCard {...post} />
						</div>
					))}
				</Masonry>
			)}
		</Container>
	);
}

export default MyBlogs;
