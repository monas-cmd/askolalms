import { Link } from 'react-router-dom';

export const CoursesPage = () => {
  // Categories of courses
  const categories = [
    {
      id: 1,
      name: "Primary Education",
      description: "Complete G1-G8 curriculum following Ethiopian standards",
      icon: "📚"
    },
    {
      id: 2,
      name: "Secondary Education",
      description: "G9-G12 courses to complete high school education",
      icon: "🎓"
    },
    {
      id: 3,
      name: "Language Learning",
      description: "Arabic and English courses for work and daily life",
      icon: "🗣️"
    },
    {
      id: 4,
      name: "Vocational Skills",
      description: "Practical skills for domestic workers",
      icon: "🧹"
    }
  ];

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Amharic Literacy (Grade 1)",
      description: "Learn basic Amharic reading and writing skills",
      progress: 65,
      category: "Primary Education",
      duration: "8 weeks",
      lessons: 24,
      icon: "🇪🇹"
    },
    {
      id: 2,
      title: "Practical Arabic for Domestic Work",
      description: "Essential Arabic phrases for household communication",
      progress: 30,
      category: "Language Learning",
      duration: "6 weeks",
      lessons: 18,
      icon: "🇸🇦"
    },
    {
      id: 3,
      title: "Mathematics (Grade 5)",
      description: "Basic arithmetic and problem solving",
      progress: 45,
      category: "Primary Education",
      duration: "10 weeks",
      lessons: 30,
      icon: "🧮"
    },
    {
      id: 4,
      title: "Financial Literacy",
      description: "Managing money and sending remittances",
      progress: 0,
      category: "Vocational Skills",
      duration: "4 weeks",
      lessons: 12,
      icon: "💵"
    },
    {
      id: 5,
      title: "English for Domestic Workers",
      description: "Basic English communication skills",
      progress: 0,
      category: "Language Learning",
      duration: "8 weeks",
      lessons: 24,
      icon: "🇬🇧"
    },
    {
      id: 6,
      title: "Household Safety",
      description: "Safety practices for domestic workers",
      progress: 0,
      category: "Vocational Skills",
      duration: "3 weeks",
      lessons: 9,
      icon: "⚠️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">My Courses</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/dashboard" 
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Courses */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Courses In Progress</h2>
            <div className="text-sm text-gray-500">
              Showing {courses.filter(c => c.progress > 0).length} active courses
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(course => course.progress > 0).map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-2xl">{course.icon}</span>
                      <h3 className="text-lg font-medium mt-2 text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                      {course.progress}%
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-4 inline-block w-full py-2 text-center bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Courses */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Available Courses</h2>
            <div className="text-sm text-gray-500">
              {courses.filter(c => c.progress === 0).length} courses available
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(course => course.progress === 0).map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start">
                    <div>
                      <span className="text-2xl">{course.icon}</span>
                      <h3 className="text-lg font-medium mt-2 text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-4 inline-block w-full py-2 text-center border border-indigo-600 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50"
                  >
                    Start Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};