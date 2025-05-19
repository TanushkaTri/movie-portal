import React from "react";

export default function Faq() {
  return (
   <>
    <h1 className="text-5xl text-pink-500 ">Frequently Asked Question</h1>
    <div className="border-2 border-gray-100  rounded-lg my-10">
    <div className="collapse collapse-arrow mt-7 ">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-xl font-medium">
        What is Movie Portal?
      </div>
      <div className="collapse-content">
        <p>Movie Portal is a digital platform that offers users the latest movie information, reviews, trailers, and ratings, all in one place.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        How does Movie Portal help movie enthusiasts?
      </div>
      <div className="collapse-content">
        <p>Movie Portal allows movie lovers to explore detailed information about movies, including their cast, director, ratings, and release dates, while also providing reviews and trailer access.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        What features does Movie Portal offer?
      </div>
      <div className="collapse-content">
        <p>Our platform offers features like movie searches, categorized lists (genres, release years), personalized recommendations, movie reviews, and user ratings, making it a one-stop destination for movie enthusiasts.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        Can users submit their reviews on Movie Portal?
      </div>
      <div className="collapse-content">
        <p>Yes, users can rate movies and submit their reviews to share their thoughts with the community and help others choose their next movie.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        How do we ensure the accuracy of movie information on Movie Portal?
      </div>
      <div className="collapse-content">
        <p>We work with trusted movie databases and regularly update our listings to ensure that all movie data, including release dates, cast, and reviews, is accurate and up-to-date.</p>
      </div>
    </div>
  </div>
  
   </>
  );
}
