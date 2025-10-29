import React, { useState } from "react";

function FeedbackForm({ addFeedback }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Fadlan dooro rating!");
      return;
    }
      if (comment.trim() === "") {
      alert("feedback haka tagin wano muhim");
      return;
    }

    addFeedback({ rating, comment, id: Date.now() });
    setRating(0);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-100"
    >
      <div className="flex justify-center mb-3 space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-2xl transition transform ${
              rating >= star ? "text-yellow-400 scale-110" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          >
            ☆
          </button>
        ))}
      </div>
      <textarea
        className="w-full p-2 border rounded mb-2 text-gray-900 focus:outline-none focus:ring-2"
        style={{
          borderColor: "rgba(255,111,97,0.5)",
         
        }}
        placeholder="Write your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className="w-full py-2 rounded text-white font-semibold transition hover:scale-105 shadow"
        style={{
          backgroundColor: "rgba(255,111,97)",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;
