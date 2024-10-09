import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [postId, setPostId] = useState(null);

  // Fetch blog posts from API
  const getData = () => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Simple Blog App</h1>
      <div className="max-w-4xl mx-auto">
        {/* BlogForm for creating or updating a post */}
        <BlogForm
          postId={postId}
          setPostId={setPostId}
          formData={formData}
          setFormData={setFormData}
          getData={getData}
        />
        {/* BlogList to display all posts */}
        <BlogList
          posts={posts}
          setFormData={setFormData}
          setPostId={setPostId}
          getData={getData}
        />
      </div>
    </div>
  );
};

export default App;
