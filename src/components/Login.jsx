import React from "react";
import { Container, Input, Button } from "./index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const login = async (data) => {};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Container>
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
									{...register("password", {
										required: true,
										minLength: {
											value: 6,
											message: "Minimum length should be 6",
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
									<Button type="submit">Log in</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Login;
