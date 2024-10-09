

---

# **Simple Blog App**

A **Simple Blog Application** built using **React.js** for the frontend and a **Node.js/Express** API for the backend, allowing users to create, update, delete, and view blog posts.

## **Features**

- **Create new blog posts** with a title and content.
- **Update existing posts** by editing their title and content.
- **Delete blog posts** that are no longer needed.
- **View all blog posts** with details such as creation and update timestamps.

## **Technologies Used**

### **Frontend**
- React.js
- Tailwind CSS (for styling)
  
### **Backend**
- Node.js
- Express.js
- MongoDB (as the database)
  
## **Installation Instructions**

### **Prerequisites**
- Ensure you have **Node.js** installed on your machine.
- Install **MongoDB** and ensure it is running on your machine (or use MongoDB Atlas for cloud-hosted MongoDB).

### **Backend Setup**

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/simple-blog-app.git
   cd simple-blog-app
   ```

2. Navigate to the backend folder and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Set up your **MongoDB URI**. In the `backend` folder, create a `.env` file with the following content:

   ```bash
   MONGO_URI=mongodb://localhost:27017/blog-app
   PORT=5000
   ```

4. Run the backend server:

   ```bash
   npm start
   ```

   The backend API will now be running on `http://localhost:5000`.

### **Frontend Setup**

1. Navigate to the frontend folder and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Run the frontend app:

   ```bash
   npm start
   ```

   The React app will now be running on `http://localhost:3000`.

## **Usage**

- Open your browser and navigate to `http://localhost:3000`.
- You will see the **Simple Blog App** interface.
- Use the form at the top to create new blog posts.
- The list of all existing blog posts will be displayed below the form.
- You can **edit** any post by clicking the **Edit** button and making the desired changes.
- You can **delete** any post by clicking the **Delete** button.

## **API Endpoints**

### **Get All Posts**
- `GET /api/posts`
- Fetches all blog posts from the database.

### **Create New Post**
- `POST /api/posts`
- Creates a new blog post.

  - **Body**: `{ "title": "Post Title", "content": "Post content" }`

### **Update Post**
- `PUT /api/posts/:id`
- Updates an existing blog post.

  - **Body**: `{ "title": "Updated Title", "content": "Updated content" }`

### **Delete Post**
- `DELETE /api/posts/:id`
- Deletes a blog post by its ID.

## **Screenshots**

### **Main Screen**

![Main Screen](https://your-screenshot-link.com)

### **Create/Edit Post**

![Create/Edit Post](https://your-screenshot-link.com)

## **Project Structure**

```bash
simple-blog-app/
│
├── backend/               # Node.js/Express backend
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   └── server.js          # Server entry point
│
├── frontend/              # React frontend
│   ├── components/        # React components
│   └── App.js             # Main React app
│
├── .gitignore
├── README.md
└── package.json
```

## **Contributing**

Feel free to open issues or pull requests if you want to improve this project. Contributions are welcome!

## **License**

This project is licensed under the MIT License.

---
