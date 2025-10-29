// MostRating.jsx
function MostRating({ feedbacks }) {
  if (feedbacks.length === 0) return null;

  // Tirinta inta jeer ee rating kasta la bixiyay
  const count = { 1:0, 2:0, 3:0, 4:0, 5:0 };
  feedbacks.forEach(f => count[f.rating] += 1);

  return (
    <div className="mb-4 p-4 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700">
      <h2 className="text-center font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Rating Percentages
      </h2>
      { [5,4,3,2,1].map(r => {
          const percentage = ((count[r] / feedbacks.length) * 100).toFixed(0);
          return (
            <div
              key={r}
              className="flex justify-between items-center mb-2 text-gray-900 dark:text-white relative group cursor-pointer"
            >
              <span>{"⭐".repeat(r) + "☆".repeat(5 - r)}</span>
              
              {/* Percentage had iyo jeer muuqda */}
              <span>{percentage}%</span>

              {/* Tooltip kaliya hover, muujinaya tirada dadka */}
              <span className="absolute right-0 -translate-x-full bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                ({count[r]} people)
              </span>
            </div>
          );
        })
      }
    </div>
  );
}

export default MostRating;
