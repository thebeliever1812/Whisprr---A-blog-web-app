import React from "react";
import { Container, Input, Button } from "./index";
import { useForm } from "react-hook-form";

function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const createUserAccount = async (data) => {
		try {
		} catch (error) {}
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Container>
				<div className="outer-box w-full max-w-3xl bg-white mx-auto py-3 px-4 rounded-lg sm:px-6 sm:py-10 shadow">
					<div className="mx-auto w-full max-w-lg p-2">
						<div className="sign-in-heading  text-xl sm:text-4xl font-semibold text-center p-1 sm:py-2">
							Welcome to Whisprr
						</div>

						<div className="login-form mt-2 sm:mt-5">
							<form onSubmit={handleSubmit(createUserAccount)}>
								<Input
									label="Full Name"
									placeholder="Enter your Full Name"
									required="true"
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
									<Button>Sign up</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default SignUp;
