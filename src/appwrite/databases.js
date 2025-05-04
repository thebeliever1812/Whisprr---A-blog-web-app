import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

export class DatabasesService {
	client = new Client();
	databases;

	constructor() {
		this.client
			.setEndpoint(conf.appwriteUrl)
			.setProject(conf.appwriteProjectId);

		this.databases = new Databases(this.client);
	}

	async createPost({ title, slug, content, status, image, userId }) {
		try {
			const dbPost = await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					slug,
					content,
					status,
					image,
					userId,
				}
			);
			return dbPost;
		} catch (error) {
			console.log(`createPost error : ${error.message}`);
			throw error;
		}
	}

	async updatePost(slug, { title, content, status, image }) {
		try {
			const dbPost = this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{
					title,
					slug,
					content,
					status,
					image,
				}
			);
			return dbPost;
		} catch (error) {
			console.log(`updatePost error : ${error.message}`);
			throw error;
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log(`deletePost error : ${error.message}`);
			throw error;
		}
	}

	async getPost(slug) {
		try {
			const dbPost = await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			);
			return dbPost;
		} catch (error) {
			console.log(`getPost error : ${error.message}`);
			throw error;
		}
	}

	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			const posts = await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				queries
			);
			return posts;
		} catch (error) {
			console.log(`getPosts error : ${error.message}`);
			throw error;
		}
	}
}

const databasesService = new DatabasesService();

export default databasesService;
