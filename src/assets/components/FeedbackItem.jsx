function FeedbackItem({ feedback }) {
  return (
    <div
      className="p-3 rounded-lg shadow bg-white border-l-4 hover:shadow-lg transition"
      style={{ borderColor: "rgba(255,111,97)" }}
    >
      <div className="font-semibold text-yellow-400 text-lg">
        {"⭐".repeat(feedback.rating)}{" "}
        {"☆".repeat(5 - feedback.rating)}
      </div>
      <p className="mt-1 text-gray-800">{feedback.comment}</p>
    </div>
  );
}

export default FeedbackItem;
