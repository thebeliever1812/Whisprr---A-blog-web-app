import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	Login,
	SignUp,
	Home,
	VerifyEmail,
	PostCard,
	Protected,
} from "./components/index.js";

import { Post, MyBlogs, AddBlog, EditPost } from "./pages/index.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/my-blogs",
				element: (
					<Protected authRequired>
						<MyBlogs />
					</Protected>
				),
			},
			{
				path: "/add-blog",
				element: (
					<Protected authRequired>
						<AddBlog />
					</Protected>
				),
			},
			{
				path: "/post/:slug",
				element: (
					<Protected authRequired>
						<Post />
					</Protected>
				),
			},
			{
				path: "/edit-post/:slug",
				element: (
					<Protected authRequired>
						<EditPost />
					</Protected>
				),
			},
		],
	},
	{
		path: "/log-in",
		element: (
			<Protected authRequired={false}>
				<Login />
			</Protected>
		),
	},
	{
		path: "/sign-up",
		element: (
			<Protected authRequired={false}>
				<SignUp />
			</Protected>
		),
	},
	{
		path: "/verify-email",
		element: <VerifyEmail />,
	},
	{
		path: "/post",
		element: <PostCard />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
