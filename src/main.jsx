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
				element: <MyBlogs />,
			},
			{
				path: "/add-blog",
				element: <AddBlog />,
			},
			{
				path: "/post/:slug",
				element: <Post />,
			},
			{
				path: "/edit-post/:slug",
				element: <EditPost />,
			},
		],
	},
	{
		path: "/log-in",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
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
