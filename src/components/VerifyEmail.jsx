import React, { useEffect } from "react";
import { authService } from "../appwrite";

function VerifyEmail() {
	useEffect(() => {
		async function verifyUser() {
			const urlParams = new URLSearchParams(window.location.search);
			const userId = urlParams.get("userId");
			const secret = urlParams.get("secret");

			if (userId && secret) {
				try {
					await authService.account.updateVerification(userId, secret);
					alert("Verification successful");
				} catch (error) {
					alert(`Verification failed ${error.message}`);
				}
			}
		}

		verifyUser();
	}, []);

	return <div className="p-10 text-center text-xl">Email Verified</div>;
}

export default VerifyEmail;
