function CoursesPage({ setSelectedCourse }) {
  const courses = [
    {
      id: 1,
      title: "Web  Development",
      desc: "Learn HTML, CSS, and JavaScript.",
      image:
        "/src/assets/img/2.jpeg",
    },
    {
      id: 2,
      title: "Graphic Design",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      image: "/src/assets/img/1.jpeg"    
},
    {
      id: 3,
      title: "Moblie App",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: "/src/assets/img/3.jpeg"    },
    {
      id: 4,
      title: "React",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
      image:"/src/assets/img/4.jpeg"
    },
    {
      id: 5,
      title: "Tailwind CSS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
      image: "/src/assets/img/5.jpeg"
    },
    {
      id: 6,
      title: "Java Script",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit..",
      image: "/src/assets/img/6.jpeg"   },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {course.desc}
              </p>
              <button
                onClick={() => setSelectedCourse(course)}
                className=" text-white px-5 py-2 rounded-lg font-semibold transition"
                 style={{
          backgroundColor: "rgba(255,111,97)",
        }}
              >
                Rate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
