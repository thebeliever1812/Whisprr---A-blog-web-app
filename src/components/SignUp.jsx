import React, { useState } from "react";
import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import { authService } from "../appwrite/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import toast from "react-hot-toast";

function SignUp() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const createUser = async (data) => {
		try {
			setLoading(true);
			const session = await authService.createUserAccount(data);
			if (session) {
				const userData = await authService.getCurrentUser();
				if (userData) {
					dispatch(login(userData));
					navigate("/");
				}
			} else {
				toast.error("No active session found");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="outer-box w-full max-w-3xl bg-white mx-auto py-3 px-4 rounded-lg sm:px-6 sm:py-10 shadow">
				<div className="mx-auto w-full max-w-lg p-2">
					<div className="sign-in-heading  text-xl sm:text-4xl font-semibold text-center p-1 sm:py-2">
						Welcome to <span className="font-bold">Whisprr</span>
					</div>

					<div className="login-form mt-2 sm:mt-5">
						<form onSubmit={handleSubmit(createUser)}>
							<Input
								label="Full Name"
								placeholder="Enter your Full Name"
								required="true"
								labelClass="text-xs sm:text-base"
								inputClass="text-sm sm:text-lg"
								{...register("fullName", {
									required: true,
									pattern: {
										value: /^(?! )[a-zA-Z]+(?: [a-zA-Z]+)*(?<! )$/,
										message: "Invalid name",
									},
								})}
								aria-invalid={errors.fullName ? "true" : "false"}
							/>
							{errors.fullName?.type === "required" ? (
								<p role="alert" className="text-red-500 text-sm">
									Name is required
								</p>
							) : errors.fullName ? (
								<p className="text-red-500 text-sm">
									{errors.fullName.message}
								</p>
							) : null}

							<Input
								label="Email"
								type="email"
								placeholder="Enter your email"
								required="true"
								labelClass="text-xs sm:text-base"
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
									{loading ? "Signing up..." : "Sign up"}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
