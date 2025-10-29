function AverageRating({ average, isDarkMode }) {
  return (
    <div
      className="text-center mb-4 text-lg font-semibold py-2 rounded-lg shadow-sm"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(255,255,255,0.1)"      // lighter background in dark mode
          : "rgba(12,22,63,0.05)",
      }}
    >
      Average Rating: <span className="text-yellow-500">{average}</span> ⭐
    </div>
  );
}

export default AverageRating;
