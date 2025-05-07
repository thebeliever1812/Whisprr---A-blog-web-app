import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databasesService } from "../appwrite";
import { AddBlog } from ".";

function EditPost() {
	const { slug } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		if (!slug) {
			return;
		}

		databasesService
			.getPost(slug)
			.then((post) => {
				if (post) {
					setPost(post);
				} else {
					console.log("Post not found for edit");
				}
			})
			.catch((error) => console.log(error.message));
	}, [slug]);

	return <>{post && <AddBlog post={post} />}</>;
}

export default EditPost;
