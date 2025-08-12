import { useState } from 'react';
import { Link } from 'react-router-dom';

export const StudentProfile = () => {
  // Mock student data - replace with actual data from your backend
  const [student, setStudent] = useState({
    name: "Alemitu Kebede",
    amharicName: "አለምቱ ከበደ",
    profileImage: "", // Can be URL or empty for placeholder
    gradeLevel: 5,
    location: "Dubai, UAE",
    homeRegion: "Amhara, Ethiopia",
    phone: "+971 50 123 4567",
    email: "alemitu@example.com",
    joinedDate: "January 2023",
    languagePreference: "Amharic",
    learningGoal: "Complete Grade 10 education",
    timeAvailability: "Evenings and weekends"
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({...student});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setStudent(formData);
    setEditMode(false);
    // In a real app, you would save to the backend here
  };

  const learningStats = [
    { name: "Courses Completed", value: 12 },
    { name: "Current Streak", value: 15, unit: "days" },
    { name: "Total Learning Hours", value: 86 },
    { name: "Certificates Earned", value: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">My Profile</h1>
            <Link 
              to="/dashboard" 
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center -mt-16">
              <div className="flex items-center">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-indigo-100 flex items-center justify-center text-indigo-600 text-5xl">
                  {student.profileImage ? (
                    <img 
                      src={student.profileImage} 
                      alt="Profile" 
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <span>አ</span>
                  )}
                </div>
                <div className="ml-6">
                  {editMode ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="text-2xl font-bold text-gray-900 mb-1 border rounded px-2 py-1"
                      />
                      <input
                        type="text"
                        name="amharicName"
                        value={formData.amharicName}
                        onChange={handleInputChange}
                        className="text-xl text-gray-600 border rounded px-2 py-1"
                      />
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                      <p className="text-xl text-gray-600">{student.amharicName}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                {editMode ? (
                  <div className="flex space-x-2">
                    <button 
                      onClick={handleSave}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                      Save Changes
                    </button>
                    <button 
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setEditMode(true)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <dl className="space-y-4">
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Grade Level</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <select
                          name="gradeLevel"
                          value={formData.gradeLevel}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1"
                        >
                          {Array.from({length: 12}, (_, i) => i + 1).map(grade => (
                            <option key={grade} value={grade}>Grade {grade}</option>
                          ))}
                        </select>
                      ) : (
                        `Grade ${student.gradeLevel}`
                      )}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Current Location</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        student.location
                      )}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Home Region</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <input
                          type="text"
                          name="homeRegion"
                          value={formData.homeRegion}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        student.homeRegion
                      )}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        student.phone
                      )}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Learning Preferences</h3>
                <dl className="space-y-4">
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Language</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <select
                          name="languagePreference"
                          value={formData.languagePreference}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1"
                        >
                          <option value="Amharic">Amharic</option>
                          <option value="English">English</option>
                          <option value="Arabic">Arabic</option>
                        </select>
                      ) : (
                        student.languagePreference
                      )}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Learning Goal</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <input
                          type="text"
                          name="learningGoal"
                          value={formData.learningGoal}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        student.learningGoal
                      )}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Availability</dt>
                    <dd className="text-sm text-gray-900">
                      {editMode ? (
                        <input
                          type="text"
                          name="timeAvailability"
                          value={formData.timeAvailability}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        student.timeAvailability
                      )}
                    </dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-1/3 text-sm font-medium text-gray-500">Member Since</dt>
                    <dd className="text-sm text-gray-900">{student.joinedDate}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Statistics */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {learningStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-3xl font-bold text-indigo-600">
                  {stat.value} {stat.unit && <span className="text-sm">{stat.unit}</span>}
                </p>
                <p className="text-sm text-gray-500 mt-2">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Certificates */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Certificates</h2>
            <Link to="/certificates" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-32 bg-indigo-50 flex items-center justify-center text-indigo-300 mb-4">
                <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Arabic Basics</h3>
              <p className="text-sm text-gray-500">Completed on March 15, 2023</p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Download Certificate
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-32 bg-indigo-50 flex items-center justify-center text-indigo-300 mb-4">
                <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Math Level 4</h3>
              <p className="text-sm text-gray-500">Completed on February 28, 2023</p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Download Certificate
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-32 bg-indigo-50 flex items-center justify-center text-indigo-300 mb-4">
                <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Financial Literacy</h3>
              <p className="text-sm text-gray-500">Completed on January 10, 2023</p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};