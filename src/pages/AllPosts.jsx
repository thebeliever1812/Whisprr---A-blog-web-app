import React, { useEffect, useState } from "react";
import { databasesService } from "../appwrite";
import toast from "react-hot-toast";
import { Container, PostCard } from "../components";
import "../Loader.css";
import Masonry from "react-masonry-css";
import './AllPosts.css'

function AllPosts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	useEffect(() => {
		setLoading(true);
		databasesService
			.getPosts()
			.then((posts) => {
				if (posts) {
					setPosts(posts.documents);
				} else {
					toast.error("No posts found");
				}
			})
			.catch((error) => toast.error(`All posts error : ${error.message}`))
			.finally(() => setLoading(false));
	}, []);
    
	return (
		<Container>
			{loading ? (
				<div className="loader top-20"></div>
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

export default AllPosts;
