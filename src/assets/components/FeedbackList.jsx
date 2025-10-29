import FeedbackItem from "./FeedbackItem.jsx";

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0)
    return (
      <p className="text-center italic text-gray-500">No feedback yet.</p>
    );

  return (
    <div className="space-y-3">
      {feedbacks.map((f) => (
        <FeedbackItem key={f.id} feedback={f} />
      ))}
    </div>
  );
}

export default FeedbackList;
