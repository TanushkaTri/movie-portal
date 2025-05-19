import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Update() {
  const { user } = useContext(AuthContext);
  const movies = useLoaderData();
  const {
    _id,
    image,
    title,
    genre: movieGenre,
    duration,
    releaseYear: movieRealeaseYear,
    rating: movieRatng,
    summary,
  } = movies || {};
  const [rating, setRating] = useState(movieRatng || 0);
  const [genre, setGenre] = useState(movieGenre || "");
  const [releaseYear, setReleaseYear] = useState(movieRealeaseYear || "");

  const updateMovie = (e) => {
    e.preventDefault();
    const image = e.target.image.value.trim();
    const title = e.target.title.value.trim();
    const duration = e.target.duration.value;
    const summary = e.target.summary.value.trim();

    // Validations
    if (!image || !image.startsWith("http")) {
      Swal.fire("Error", "Please provide a valid image URL!", "error");
      return;
    }
    if (!title || title.length < 2) {
      Swal.fire("Error", "Title must have at least 2 characters!", "error");
      return;
    }
    if (!genre) {
      Swal.fire("Error", "Please select a genre!", "error");
      return;
    }
    if (!duration || duration <= 10) {
      Swal.fire("Error", "Duration must be greater than 60 minutes!", "error");
      return;
    }
    if (!releaseYear) {
      Swal.fire("Error", "Please select a release year!", "error");
      return;
    }
    if (rating === 0) {
      Swal.fire("Error", "Please select a rating!", "error");
      return;
    }
    if (!summary || summary.length < 10) {
      Swal.fire("Error", "Summary must have at least 10 characters!", "error");
      return;
    }

    const updatemovie = {
      image,
      title,
      genre,
      duration,
      releaseYear,
      rating,
      summary,
      email: user.email,
      displayName: user.displayName,
    };

    // console.log("Movie added:", updatemovie);

    Swal.fire("Success", "Movie added successfully!", "success");

    e.target.reset();
    setRating(0);
    setGenre("");
    setReleaseYear("");

    fetch(`https://movie-portal-server-eight.vercel.app/addmovie/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatemovie),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            text: "Movie Update Successfully",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    // console.log(data);
  };
  return (
    <div className="bg-[#20232a] rounded-3xl min-h-screen flex justify-center items-center ">
      <div className="bg-purple text-black card rounded-lg w-full max-w-md p- shadow-lg ">
        <h1 className="text-4xl font-semibold text-center lg:ml-40 mb-6 text-white">
          Update Movie
        </h1>
        <form
          onSubmit={updateMovie}
          className="space-y-4  bg-white/10 w-[600px] border-2 border-gray-500 p-3 shadow-2xl rounded-xl"
        >
          <div className="flex justify-evenly  ">
            <section className="space-y-5">
              <div>
                <label className="block font-medium text-white">
                  Movie Poster URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Enter Image URL"
                  className=" input input-bordered w-full bg-[#2a2e38] border-2 border-white backdrop-blur-md text-white"
                />
              </div>

              <div>
                <label className="block font-medium text-white">
                  Movie Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="Enter Movie Title"
                  className=" input input-bordered w-full bg-[#2a2e38] border-2 border-white backdrop-blur-md text-white"
                />
              </div>

              <div>
                <label className="block font-medium text-white">Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="select select-bordered  w-full bg-[#2a2e38] border-2 border-white backdrop-blur-md text-white"
                >
                  <option value="">Select Genre</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                  <option value="action">Action </option>
                  <option value="romance">Romance </option>
                  <option value="fantasy">Fantasy</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block font-medium text-white">
                  Duration (in minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  defaultValue={duration}
                  placeholder="Enter Duration"
                  className="input input-bordered w-full bg-[#2a2e38] border-2 border-white backdrop-blur-md text-white"
                  min={10}
                />
              </div>
            </section>
            <section className="space-y-3">
              <div>
                <label className="block font-medium text-white">
                  Release Year
                </label>
                <select
                  value={releaseYear}
                  onChange={(e) => setReleaseYear(e.target.value)}
                  className="select select-bordered w-full input  bg-[#2a2e38] border-2 border-white backdrop-blur-md text-white"
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2022">2021</option>
                  <option value="2022">2020</option>
                  <option value="2021">2019</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                </select>
              </div>

              <div className=" items-center">
                <label className="block font-medium text-white">Rating</label>
                <Rating
                  onClick={(rate) => setRating(rate)}
                  ratingValue={rating}
                  size={25}
                  className="mt-4"
                />
              </div>

              <div>
                <label className="block font-medium text-white">Summary</label>
                <textarea
                  name="summary"
                  rows="4"
                  defaultValue={summary}
                  placeholder="Enter Movie Summary"
                  className="textarea textarea-bordered  w-full bg-[#2a2e38] border-2 border-white backdrop-blur-md text-white"
                ></textarea>
              </div>
            </section>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-[#dfff2a] w-full">
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
}
