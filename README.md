# Whisprr

## 🚀 Description

**Whisprr** is a powerful and elegant blogging platform built with React and Appwrite. It empowers users to create, share, and explore diverse content, ranging from technical articles and stories to tutorials and personal thoughts. Designed with a clean and intuitive interface, Whisprr provides a seamless user experience across devices.

## 🌐 Live Demo

[Whisprr - Visit Website](https://your-deployment-link.com)

## ✨ Features

- 📝 **Write & Publish** - Create and manage blog posts with rich content.
- 🔍 **Discover** - Browse posts easily.
- 🧾 **Detailed Blog Pages** - Read full articles with title and timestamp.
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
- **User Authentication** - Login and signup system using Appwrite.
- **Post Metadata** - Each post includes timestamp
- **Edit and Delete** - Users can manage their own posts.
- **Persistent Backend** - Uses Appwrite for secure and persistent data storage.

<!-- Screenshots -->

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