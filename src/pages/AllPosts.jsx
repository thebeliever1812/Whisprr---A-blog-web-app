import { lazy, Suspense, useEffect, useState } from "react";
import { databasesService } from "../appwrite";
import toast from "react-hot-toast";
import { Container, LazyLoader } from "../components";
import "../Loader.css";
import { useSelector } from "react-redux";

function AllPosts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	useEffect(() => {
		if (!userLoggedIn) {
			return;
		}

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
	}, [userLoggedIn]);

	const PostCard = lazy(() => import("../components/PostCard"));

	return (
		<Container>
			{loading ? (
				<div className="w-full flex justify-center mt-5">
					<div className="loader"></div>
				</div>
			) : (
				<div className="posts-container columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
					{posts?.map((post) => (
						<div key={post.$id} className="break-inside-avoid">
							<Suspense fallback={<LazyLoader />}>
								<PostCard {...post} />
							</Suspense>
						</div>
					))}
				</div>
			)}
		</Container>
	);
}

export default AllPosts;
