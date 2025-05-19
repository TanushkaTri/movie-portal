import React from "react";
import Choose from "../extraHome_section/Choose";
import Hook from "../extraHome_section/Hook";
import { Helmet } from "react-helmet";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Magic of Cinema",
      description: "Discover how movies transport us to different worlds.",
    },
    {
      id: 2,
      title: "Top 10 Blockbusters",
      description: "A curated list of the most memorable movies of all time.",
    },
    {
      id: 3,
      title: "The Art of Storytelling",
      description: "Exploring the narrative techniques in modern filmmaking.",
    },
  ];

  return (
    
    <>
    <div className="p-8 ">
      <h2 className="text-3xl font-bold  text-center mb-8">
        Movie Blogs
      </h2>
      <Helmet>
        <title>Movie Portal | Blog</title>
      </Helmet>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group relative overflow-hidden shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h3 className="text-xl font-semibold  group-hover:text-white transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="mt-2  group-hover:text-gray-100 transition-colors duration-300">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Choose />
      <Hook />
    </>
  );
};

export default Blog;
