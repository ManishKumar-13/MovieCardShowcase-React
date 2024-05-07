// import React from "react";
// import "../Movie.css";

// const Movie = ({ movie }) => {
//   const { title, year, runtime, genres, director, actors, plot, posterUrl } =
//     movie;
// //   const fallbackImage = `https://via.placeholder.com/150?text=${encodeURIComponent(
// //     title
// //   )}`;

//   return (
//     <div className="movie">
//       <div className="poster">
//         {/* <img src={posterUrl || fallbackImage} alt={title} /> */}
//         {/* <img src={posterUrl || fallbackImage} alt={posterUrl ? title : fallbackImage} /> */}
//         <img
//           src={posterUrl || fallbackImage}
//           alt={title}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = fallbackImage;
//           }}
//         />
//       </div>
//       <div className="details">
//         <h2>{title}</h2>
//         <p>Year: {year}</p>
//         <p>Runtime: {runtime} min</p>
//         <p>Genres: {genres.join(", ")}</p>
//         <p>Director: {director}</p>
//         <p>Actors: {actors}</p>
//         <p>Plot: {plot}</p>
//       </div>
//     </div>
//   );
// };

// export default Movie;



import React, { useState } from 'react';
import '../Movie.css';

const Movie = ({ movie }) => {
  const { title, year, runtime, genres, director, actors, plot, posterUrl } = movie;
  const [imageLoaded, setImageLoaded] = useState(true); // State to track if the image is loaded successfully

  const handleImageError = () => {
    setImageLoaded(false); // Set imageLoaded state to false when the poster image fails to load
  };

  // Render the movie component only if the image is loaded successfully
  if (!imageLoaded) {
    return null;
  }

  return (
    <div className="movie">
      <div className="poster">
        <img src={posterUrl} alt={title} onError={handleImageError} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p><b>Year:</b> {year}</p>
        <p><b>Runtime:</b> {runtime} min</p>
        <p><b>Genres:</b> {genres.join(', ')}</p>
        <p><b>Director:</b> {director}</p>
        <p><b>Actors:</b> {actors}</p>
        <p><b>Plot:</b> {plot}</p>
      </div>
    </div>
  );
};

export default Movie;
