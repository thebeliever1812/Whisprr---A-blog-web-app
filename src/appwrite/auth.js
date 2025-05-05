import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
import toast from "react-hot-toast";

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.account = new Account(this.client);
	}

	async createUserAccount({ email, password, fullName }) {
		try {
			// Step 1: create a user acct
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				fullName
			);
			if (userAccount) {
				return this.loginUser({ email, password });
			}
			return userAccount;
		} catch (error) {
			if (error.code === 409) {
				toast.error("Email is already registered. Please log in instead.");
			} else {
				toast.error(error.message);
				console.log(error.message);
			}
		}
	}

	async loginUser({ email, password }) {
		const session = await this.account.createEmailPasswordSession(
			email,
			password
		);

		const user = await this.account.get();

		if (!user.emailVerification) {
			await this.account.createVerification(
				"https://whisprr-fawn.vercel.app/verify-email"
			);
			alert(
				"Account created! A verification link has been sent to your email. Please click it to verify your account"
			);
		}

		return session;
	}

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			if (error.code && error.code !== 401) {
				console.log("Unexpected error:", error.message);
				toast.error(error.message);
			}
		}
		return null;
	}

	async logoutUser() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			toast.error(error.message);
			console.log(error.message);
		}
	}
}

const authService = new AuthService();

export default authService;
