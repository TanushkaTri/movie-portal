import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

export default function DetailsMovie({ movies }) {
  const { user, isAdmin } = useContext(AuthContext); // Получаем информацию о пользователе и администраторе
  const { _id, image, title, genre, duration, releaseYear, rating, summary } = movies || {};
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Добавить в избранное
  const addToFavourite = () => {
    const allMovie = {
      image,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email: user.email,
    };

    fetch(`https://movie-portal-server-eight.vercel.app/favourite`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allMovie),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Added To Favourite!");
      });
  };

  // Удалить фильм
  const deleteMovie = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to cancel this action",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-portal-server-eight.vercel.app/addmovie/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your movie has been deleted.", "success");
              navigate("/allMovie");
            }
          })
          .catch((error) => {
            Swal.fire("Error!", "Something went wrong. Try again.", "error");
            console.error("Error deleting movie:", error);
          });
      }
    });
  };

  return (
    <>
      <div className="my-4 flex justify-center">
        <Helmet>
          <title>Movie Portal | Details movie</title>
        </Helmet>
        <div className="w-full max-w-sm sm:max-w-md md:max-w-5xl border-2 border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <figure>
            <img
              src={image}
              className="w-52 h-64 object-cover transform hover:scale-110 transition-all duration-300 rounded-3xl p-4"
              alt={title}
            />
          </figure>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <div className="flex items-center space-x-4 mb-3">
              <p className="text-sm">{genre}</p>
              <p className="text-sm">{duration} мин</p>
            </div>
            <div className="flex items-center space-x-4 mb-3">
              <p className="text-sm">{releaseYear}</p>
              <div className="bg-yellow-500 px-2 py-1 rounded-full text-xs">
                {rating}
              </div>
            </div>
            <p className="text-sm mb-4">{summary}</p>
            <div className="flex space-x-3">
              {/* Кнопка для добавления в избранное только для обычных пользователей */}
              {!isAdmin && (
                <button
                  onClick={addToFavourite}
                  className="btn btn-outline btn-secondary"
                >
                  Add to Favourite
                </button>
              )}

              {/* Кнопки для администраторов */}
              {isAdmin && (
                <>
                  <button
                    onClick={deleteMovie}
                    className="btn btn-outline btn-error"
                  >
                    Delete Movie
                  </button>
                  <Link to={`/updateMovie/${_id}`} className="btn btn-accent">
                    Update Movie
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to={`/allMovie`} className="btn mt-4 ml-34">
        See All Movies
      </Link>
    </>
  );
}