import React, { useState, useEffect } from "react";
import ThemeToggle from "./assets/components/ThemeToggle";
import AverageRating from "./assets/components/AverageRating";
import FeedbackList from "./assets/components/FeedbackList";
import FeedbackForm from "./assets/components/FeedbackForm";
import MostRating from "./assets/components/MostRating";
import CoursesPage from "./assets/components/CoursesPage";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks"));
    if (stored) setFeedbacks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  const averageRating =
    feedbacks.length === 0
      ? 0
      : (
          feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
        ).toFixed(1);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {!selectedCourse ? (
        <CoursesPage setSelectedCourse={setSelectedCourse} />
      ) : (
        <div className="min-h-screen flex justify-center items-center py-10">
          <div
            className={`container mx-auto p-6 max-w-md rounded-2xl shadow-2xl transition-colors duration-500 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <div className="flex flex-col items-center mb-5">
              
              <h1
                className="text-3xl font-extrabold mt-3 tracking-wide"
                style={{
                  color: darkMode ? "rgba(255,111,97)" : "rgba(12,22,63)",
                }}
              >
                Rate: {selectedCourse.title}
              </h1>
            </div>

            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <AverageRating average={averageRating} darkMode={darkMode} />
            <MostRating feedbacks={feedbacks} />
            <FeedbackForm addFeedback={addFeedback} darkMode={darkMode} />
            <FeedbackList feedbacks={feedbacks} darkMode={darkMode} />

            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedCourse(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Back to Courses
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
