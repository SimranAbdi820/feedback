function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="text-center mb-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-5 py-2 rounded-lg text-white font-semibold transition transform hover:scale-105 shadow"
        style={{
          backgroundColor: "rgba(12,22,63)",
        }}
      >
       Dark Mode: {darkMode ? "On" : "Off"}
      </button>
    </div>
  );
}

export default ThemeToggle;
