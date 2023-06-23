import React, { useState } from "react";
import RatingCard from "./components/rating-card";
import ThankYou from "./components/thankyou";

export default function App() {
  const [rating, setRating] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleClick(e: any) {
    setRating(e.target.value);
  }

  function handleSubmit() {
    if (rating === "") {
      return;
    }
    setIsSubmitted(true);
  }

  function handleReset() {
    setRating("");
    setIsSubmitted(false);
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen text-white bg-deep-dark-blue">
      {!isSubmitted ? (
        <RatingCard
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          rating={rating}
        />
      ) : (
        <ThankYou rating={rating} onClick={handleReset} />
      )}
    </div>
  );
}
