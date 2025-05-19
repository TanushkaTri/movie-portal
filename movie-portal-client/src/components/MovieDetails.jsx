import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsMovie from './DetailsMovie';
import { AuthContext } from '../AuthProvider/AuthProvider';

export default function MovieDetails() {
  const allData = useLoaderData();
  const { id } = useParams();
  const [movies, setMovie] = useState(allData);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    authorName: '',
    rating: 5,
    text: ''
  });
  const [errorLoadingReviews, setErrorLoadingReviews] = useState('');
  const { isAdmin } = useContext(AuthContext);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
       const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews/${id}`);
        if (!response.ok) {
          throw new Error('Failed to load reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setErrorLoadingReviews(error.message);
        console.error('Error loading reviews:', error);
      }
    };
    fetchReviews();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newReview,
          movieId: id
        })
      });

      if (response.ok) {
        const newReviewData = await response.json();
        // Обновляем состояние отзывов, добавляя новый отзыв в конец
        setReviews((prev) => [...prev, newReviewData]);
        // Сбрасываем форму
        setNewReview({ authorName: '', rating: 5, text: '' });
      } else {
        console.error('Error submitting review:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleDelete = async (reviewId) => {
    if (window.confirm("Вы уверены, что хотите удалить этот отзыв?")) {
      try {
       const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews/${reviewId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Ошибка при удалении отзыва');
        }
        setReviews((prev) => prev.filter(review => review._id !== reviewId));
      } catch (error) {
        console.error('Error deleting review:', error);
        alert(`Ошибка: ${error.message}`);
      }
    }
  };

  return (
    <div className="my-4 flex flex-col items-center">
      {movies ? (
        <>
          <DetailsMovie movies={movies} setMovie={setMovie} />
          <div className="w-full max-w-sm sm:max-w-md md:max-w-5xl mt-8 border-2 border-gray-200 shadow-lg rounded-lg overflow-hidden p-6">
            <h2 className="text-2xl font-semibold mb-4">Movie Reviews</h2>
            {errorLoadingReviews && <p className="text-red-500">{errorLoadingReviews}</p>}
            {/* Форма для оставления отзыва доступна только для пользователей */}
            {!isAdmin && (
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded text-black"
                    value={newReview.authorName}
                    onChange={(e) => setNewReview({ ...newReview, authorName: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Rating</label>
                  <select
                    className="w-full p-2 border rounded text-black"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  >
                    {[5, 4, 3, 2, 1].map(num => (
                      <option key={num} value={num}>{num} ★</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Your Review</label>
                  <textarea
                    className="w-full p-2 border rounded min-h-[100px] text-black"
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
              </form>
            )}
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map(review => (
                  <div key={review._id} className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{review.authorName}</h3>
                      <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                      {isAdmin && (
                        <button 
                          onClick={() => handleDelete(review._id)} 
                          className="text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{review.text}</p>
                    <p className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet. Be the first!</p>
              )}
            </div>
          </div>
        </>
      ) : (
        "Not found"
      )}
    </div>
  );
}