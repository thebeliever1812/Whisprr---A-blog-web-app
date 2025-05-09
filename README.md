# Whisprr

## 🚀 Description

**Whisprr** is a powerful and elegant blogging platform built with React and Appwrite. It empowers users to create, view and explore diverse content, ranging from technical articles and stories to tutorials and personal thoughts. Designed with a clean and intuitive interface, Whisprr provides a seamless user experience across devices.

## 🌐 Live Demo

[Whisprr - Visit Website](https://whisprr-fawn.vercel.app)

## ✨ Features

- 📝 **Write & Publish** - Create and manage blog posts with rich content.
- 🔍 **Discover** - Browse posts easily.
- 🧾 **Detailed Blog Pages** - Read full articles with title and timestamp.
- 🔄 **Full CRUD Support** - Create, Read, Update, and Delete blog posts.
- 📱 **Responsive Design** - Optimized for all screen sizes.
- ☁️ **Powered by Appwrite** - Handles authentication, database, and storage.
- ⚛️ **Modern Stack** - Built with React and Tailwind CSS.

## 🏗 Tech Stack

- **Web Technologies:** HTML, CSS, JavaScript
- **Frontend Libraries:** React, React Router, Redux Toolkit
- **Backend:** Appwrite (Auth + Database + Storage)
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Vercel
- **Linting:** ESLint

## 📂 Project Structure

```
Whisprr/
├── node_modules/
├── public/             # Static assets
├── src/
│   ├── app/            # Redux store
│   ├── appwrite/       # Appwrite services
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── conf/           # Appwrite API integration
│   ├── features/       # Application features
│   ├── App.jsx         # App root
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── .gitignore
├── README.md
├── eslint.config.js
├── package-lock.json
├── package.json
├── vercel.json
└── vite.config.js
```

## ⚙️ Functionality

- **Create and Publish Posts** - Authenticated users can publish articles.
- **Read** - Read blogs and detailed content.
- **Update Posts** - Users can edit their own posts.
- **Delete Posts** - Users can delete their published posts.
- **User Authentication** - Login and signup system using Appwrite.
- **Post Metadata** - Each post includes timestamp.
- **Persistent Backend** - Uses Appwrite for secure and persistent data storage.

## 🖼 Screenshots

Here are some screenshots of the application:

### Home Page
![Home Page (When Logout)](/public/screenshots/home_ui.png)
![Home Page (When Logged in)](/public/screenshots/home_all_posts.png)

### Sign Up Page
![Sign Up Page](/public/screenshots/signup_page.png)

### Login Page
![Login Page](/public/screenshots/login_page.png)

### My Blogs Page
![My Blogs Page](/public/screenshots/my_blogs_page.png)

### Post
![Post](/public/screenshots/post.png)

### Add Blog Page
![Add Blog Page](/public/screenshots/add_blog_page.png)

## ⚙️ Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/thebeliever1812/Whisprr---A-blog-web-app.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd Whisprr
   ```
3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Create a .env file and add your Appwrite credentials:**

   ```sh
   VITE_APPWRITE_URL=your-api-endpoint
   VITE_APPWRITE_PROJECT_ID=your-project-id
   VITE_APPWRITE_DATABASE_ID=your-database-id
   VITE_APPWRITE_COLLECTION_ID=your-collection-id
   VITE_APPWRITE_BUCKET_ID=your-bucket-id
   ```

5. **Start the development server:**
   ```sh
   npm run dev
   ```

## 🚀 Usage

1. Visit the homepage to browse latest blog posts.
2. Log in or sign up to create a new blog post.
3. Use the editor to write and publish articles.
4. View your posts and by other users 
5. Update or Delete your published posts.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests to improve the project! 😊

## 🙋‍♂️ Author

Basir Ahmad
📍 Delhi, India
📧 basirahmadmalik@gmail.com