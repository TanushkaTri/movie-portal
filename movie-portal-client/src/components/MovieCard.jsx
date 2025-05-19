import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ sendCard }) {
  const { _id, image, title, genre, duration, releaseYear, rating } = sendCard || {};
  
  return (
    <div className="my-4 transition-all duration-300 hover:shadow-lg">
      <div className="border-2 border-gray-100 card card-compact w-72 sm:w-80 md:w-80 shadow-xl rounded-lg overflow-hidden">
        <figure className="relative">
          <img
            src={image}
            className="w-full h-[280px] object-cover"
            alt={title}
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
            {rating} ★
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{genre}</span>
            <span>{duration} min</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500">{releaseYear}</span>
            <Link 
              to={`/movieDetails/${_id}`} 
              className="btn btn-sm btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}