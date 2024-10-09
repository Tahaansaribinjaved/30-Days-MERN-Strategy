import React from "react";

const BlogList = ({ posts, setFormData, setPostId, getData }) => {

  // Handle delete functionality
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Post deleted!");
          getData(); // Refresh data after deletion
        })
        .catch((err) => console.error(err));
    }
  };

  // Handle edit functionality
  const handleEdit = (post) => {
    setFormData({ title: post.title, content: post.content });
    setPostId(post._id); // Set postId to know which post to update
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="text-gray-500 text-sm">
            <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(post.updatedAt).toLocaleString()}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => handleEdit(post)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-yellow-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(post._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
