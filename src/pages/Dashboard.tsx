import { Link } from 'react-router-dom';

export const Dashboard = () => {
  // Mock data - in a real app this would come from API
  const progress = {
    currentGrade: 5,
    subjectsCompleted: 12,
    overallProgress: 68,
    recentAchievements: [
      { name: "Arabic Basics", date: "2 days ago", icon: "🇸🇦" },
      { name: "Math Level 4", date: "1 week ago", icon: "🧮" },
      { name: "30 Day Streak", date: "Today", icon: "🔥" }
    ]
  };

  const currentCourses = [
    { 
      name: "Amharic Language (Grade 5)", 
      progress: 45,
      nextLesson: "Reading Comprehension",
      icon: "🇪🇹"
    },
    { 
      name: "Practical Arabic for Work", 
      progress: 72,
      nextLesson: "Household Vocabulary",
      icon: "📚"
    },
    { 
      name: "Financial Literacy", 
      progress: 30,
      nextLesson: "Sending Remittances",
      icon: "💵"
    }
  ];

  const recommendedCourses = [
    { name: "English for Domestic Workers", icon: "🇬🇧" },
    { name: "Health & Safety", icon: "🏥" },
    { name: "Rights & Laws in Gulf", icon: "⚖️" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">TenaLMS Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium">Alemitu</span>
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  አ
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">ሰላም አለምቱ!</h2>
              <p className="mt-2">You're making great progress in your education journey</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <span className="text-xl">🏆</span>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Current Grade</h3>
            <p className="text-4xl font-bold text-indigo-600">{progress.currentGrade}</p>
            <p className="text-sm text-gray-500 mt-2">Primary School</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Subjects Completed</h3>
            <p className="text-4xl font-bold text-indigo-600">{progress.subjectsCompleted}</p>
            <p className="text-sm text-gray-500 mt-2">Out of 20</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Overall Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-indigo-600 h-4 rounded-full" 
                style={{ width: `${progress.overallProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{progress.overallProgress}% complete</p>
          </div>
        </div>

        {/* Current Courses */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Current Courses</h2>
            <Link to="/courses" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-2xl">{course.icon}</span>
                    <h3 className="text-lg font-medium mt-2 text-gray-900">{course.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Next: {course.nextLesson}</p>
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
                <button className="mt-4 w-full py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100">
                  Continue Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <ul className="divide-y divide-gray-200">
              {progress.recentAchievements.map((item, index) => (
                <li key={index} className="py-3 flex items-center">
                  <span className="mr-4 text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
                <span className="text-2xl">{course.icon}</span>
                <h3 className="text-lg font-medium mt-2 text-gray-900">{course.name}</h3>
                <button className="mt-4 w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50">
                  Start Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around">
          <Link to="/dashboard" className="p-4 text-indigo-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link to="/courses" className="p-4 text-gray-500 hover:text-indigo-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </Link>
          <Link to="/progress" className="p-4 text-gray-500 hover:text-indigo-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </Link>
          <Link to="/profile" className="p-4 text-gray-500 hover:text-indigo-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
};