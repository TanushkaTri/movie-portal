import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Helmet } from "react-helmet";

export default function AllMovie() {
  const getData = useLoaderData();
  const [search, setSerch] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [movieData, setMovieData] = useState(getData);

  const fetchMovies = () => {
    const filters = [];
    if (search) filters.push(`serchParams=${search}`);
    if (year) filters.push(`year=${year}`);
    if (genre) filters.push(`genre=${genre}`);
    if (rating) filters.push(`rating=${rating}`);

    const queryString = filters.length > 0 ? `?${filters.join("&")}` : "";

   fetch(`https://movie-portal-server.onrender.com/addmovie${queryString}`)

      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  };

  const handleFilter = () => {
    fetchMovies();
  };

  const handleReset = () => {
    setSerch("");
    setYear("");
    setGenre("");
    setRating("");
    setMovieData(getData); 
  };

  useEffect(() => {
    fetchMovies(); 
  }, []);

  return (
    <div>
      <div>
        <input
          placeholder="Search Movie"
          value={search} 
          onChange={(e) => setSerch(e.target.value)}
          type="text"
          className="input input-bordered border-2 border-gray-400 backdrop-blur-md w-96 dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black"
        />
      </div>
      <div>
        <select
          value={year} 
          onChange={(e) => setYear(e.target.value)}
          className="input input-bordered border-2 border-gray-400 backdrop-blur-md w-96 dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black mt-3 mr-3"
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

        <select
          value={genre} // Добавлено значение для управления
          onChange={(e) => setGenre(e.target.value)}
          className="input input-bordered border-2 border-gray-400 backdrop-blur-md w-96 dark:bg-[#444850] dark:text-white light-mode:bg-white light-mode:text-black mt-3 mr-3"
        >
          <option value="">Select Genre</option>
                  <option value="comedy">Comedy</option>
<option value="drama">Drama</option>
<option value="horror">Horror</option>
<option value="action">Action</option>
<option value="romance">Romance</option>
<option value="fantasy">Fantasy</option>
<option value="sci-fi">Sci-Fi</option>
<option value="thriller">Thriller</option>
<option value="mystery">Mystery</option>
<option value="adventure">Adventure</option>
<option value="animation">Animation</option>
<option value="crime">Crime</option>
<option value="documentary">Documentary</option>
<option value="family">Family</option>
<option value="history">History</option>
<option value="war">War</option>
<option value="musical">Musical</option>
<option value="western">Western</option>
          
        </select>

        <button onClick={handleFilter} className="btn btn-primary mt-3">
          Filter
        </button>
        <button onClick={handleReset} className="btn btn-secondary mt-3 ml-3">
        Reset filters
        </button>
      </div>
      <Helmet>
        <title>Movie Portal | All movie</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {movieData?.map((data) => (
          <MovieCard key={data._id} sendCard={data} />
        ))}
      </div>
    </div>
  );
}