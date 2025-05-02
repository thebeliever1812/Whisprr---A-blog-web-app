import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.account = new Account(this.client);
	}

	async createUserAccount({ fullName, email, password }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				fullName,
				email,
				password
			);
		} catch (error) {}
	}
}

const authService = new AuthService();

export default authService;
