import React, { useState } from "react";
import axios from "axios";

const BlogForm = ({ postId, setPostId, formData, setFormData, getData }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postId) {
      // Update post
      axios.put(`http://localhost:5000/api/posts/${postId}`, formData)
        .then(() => {
          alert("Post updated!");
          getData(); // Refresh post data after update
          setPostId(null); // Reset postId after updating
          setFormData({ title: "", content: "" }); // Reset form
        })
        .catch((err) => console.error(err));
    } else {
      // Create new post
      axios.post("http://localhost:5000/api/posts", formData)
        .then(() => {
          alert("Post created!");
          getData(); // Refresh post data after creation
          setFormData({ title: "", content: "" }); // Reset form
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">{postId ? "Edit Post" : "Create a New Post"}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter the title"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write your post content here..."
            required
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {postId ? "Update Post" : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
