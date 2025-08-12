import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
  {/* Navigation */}
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-indigo-600">ASKOLA</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Get Started
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">🇪🇹</span>
            <span className="text-sm text-gray-500">🇸🇦</span>
            <span className="text-sm text-gray-500">🇦🇪</span>
          </div>
        </div>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center">
      
      <h2 className="text-3xl md:text-4xl font-semibold text-indigo-600 mb-6">
        AI-Powered Learning for Ethiopian Domestic Workers
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        Free education from Grade 1-12 with AI tutors in Amharic, Afan Oromo, and English. 
        Learn at your own pace while working in Gulf countries.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/register"
          className="px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Start Learning Free
        </Link>
        <Link
          to="/how-it-works"
          className="px-8 py-3 text-base font-medium text-indigo-600 bg-white rounded-md hover:bg-gray-50"
        >
          How It Works
        </Link>
      </div>
    </div>

    {/* Features Preview */}
    <div className="mt-24 grid gap-8 md:grid-cols-3">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-indigo-600 mb-4">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Complete G1-12 Curriculum</h3>
        <p className="text-gray-600">
          Ethiopian national curriculum adapted for adult learners with AI-powered Amharic instruction.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-indigo-600 mb-4">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Voice-Enabled Learning</h3>
        <p className="text-gray-600">
          Learn hands-free through voice commands and audio lessons while working.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-indigo-600 mb-4">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Practical Skills Training</h3>
        <p className="text-gray-600">
          Financial literacy, Arabic language, and job skills tailored for domestic workers.
        </p>
      </div>
    </div>

    {/* Testimonials */}
    <div className="mt-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Success Stories</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-yellow-400 mb-4 flex justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 italic mb-4">
            "I completed grade 10 while working in Dubai. Now I can help my children with their homework!"
          </p>
          <p className="font-medium">- Alemitu, 32, Dubai</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-yellow-400 mb-4 flex justify-center">
            {/* Star ratings */}
          </div>
          <p className="text-gray-600 italic mb-4">
            "The Arabic lessons helped me communicate better with my employer. I got a salary increase!"
          </p>
          <p className="font-medium">- Mohammed, 28, Riyadh</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-yellow-400 mb-4 flex justify-center">
            {/* Star ratings */}
          </div>
          <p className="text-gray-600 italic mb-4">
            "I never went to school as a child. At 40, I'm learning to read and write for the first time."
          </p>
          <p className="font-medium">- Worknesh, 40, Abu Dhabi</p>
        </div>
      </div>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-white mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-lg font-bold text-indigo-600">ASKOLA</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-gray-500 hover:text-gray-700">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Developed with support from Ethiopian educational experts
        </p>
        <p className="mt-2 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ASKOLA. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>
  );
};