import React, { useState } from "react";
import { Container, Input, Button } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authService } from "../appwrite";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../features/auth/authSlice";
import toast from "react-hot-toast";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const login = async (data) => {
		try {
			setLoading(true);
			const session = await authService.loginUser(data);
			if (session) {
				const userData = await authService.getCurrentUser();
				if (userData) {
					dispatch(authLogin(userData));
					toast.success("Login successful");
					navigate("/");
				} else {
					toast.error(
						"Could not fetch user data. Please try logging in again."
					);
				}
			}
		} catch (error) {
			toast.error(error.message);
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="outer-box w-full max-w-3xl bg-white mx-auto py-3 px-4 rounded-lg sm:px-6 sm:py-10 shadow">
				<div className="mx-auto w-full max-w-lg p-2">
					<div className="sign-in-heading  text-xl sm:text-4xl font-semibold text-center p-1 sm:py-2">
						Welcome! Log in here.
					</div>
					<div className="text-xs sm:text-sm text-center  mx-auto max-w-sm py-1 px-2.5 ">
						Haven't Signed up?
						<Link to="/sign-up" className="text-blue-800 cursor-pointer">
							{" "}
							Create an account
						</Link>
					</div>

					<div className="login-form mt-4 sm:mt-10">
						<form onSubmit={handleSubmit(login)}>
							<Input
								label="Email"
								type="email"
								placeholder="Enter your email"
								required="true"
								labelClass='text-xs sm:text-base'
								inputClass="text-sm sm:text-lg"
								{...register("email", {
									required: true,
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Invalid email address",
									},
								})}
								aria-invalid={errors.email ? "true" : "false"}
							/>
							{errors.email?.type === "required" ? (
								<p role="alert" className="text-red-500 text-sm">
									Email is required
								</p>
							) : errors.email ? (
								<p className="text-red-500 text-sm">{errors.email.message}</p>
							) : null}
							<Input
								label="Password"
								type="password"
								placeholder="Enter your password"
								required="true"
								labelClass='text-xs sm:text-base'
								inputClass="text-sm sm:text-lg"
								{...register("password", {
									required: true,
									minLength: {
										value: 8,
										message: "Minimum length should be 8",
									},
									maxLength: {
										value: 10,
										message: "Maximum length should be 10",
									},
								})}
								aria-invalid={errors.password ? "true" : "false"}
							/>
							{errors.password?.type === "required" ? (
								<p role="alert" className="text-red-500 text-sm">
									Password is required
								</p>
							) : errors.password ? (
								<p className="text-red-500 text-sm">
									{errors.password.message}
								</p>
							) : null}

							<div className="mt-10">
								<Button type="submit" disabled={loading}>
									{loading ? "Loggin in..." : "Log in"}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
