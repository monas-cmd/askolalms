import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const InitialAssessment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Check if coming from registration
  useEffect(() => {
    if (!location.state?.fromRegistration) {
      navigate('/dashboard'); // Redirect if not from registration
    }
  }, [location, navigate]);

  const questions = [
    {
      id: 1,
      question: "What is your highest completed education level?",
      options: [
        "No formal education",
        "Primary school (Grade 1-4)",
        "Elementary school (Grade 5-8)",
        "High school (Grade 9-12)",
        "Some college/university"
      ]
    },
    {
      id: 2,
      question: "How would you rate your Amharic reading skills?",
      options: [
        "Cannot read",
        "Can read simple words",
        "Can read sentences",
        "Can read paragraphs",
        "Fluent reader"
      ]
    },
    {
      id: 3,
      question: "How would you rate your English skills?",
      options: [
        "No English",
        "Basic words only",
        "Simple conversations",
        "Can understand most things",
        "Fluent in English"
      ]
    },
    {
      id: 4,
      question: "How many hours per week can you dedicate to learning?",
      options: [
        "Less than 2 hours",
        "2-5 hours",
        "5-10 hours",
        "10-15 hours",
        "More than 15 hours"
      ]
    },
    {
      id: 5,
      question: "What is your primary learning goal?",
      options: [
        "Basic literacy",
        "Complete primary education",
        "Learn job-related skills",
        "Improve language skills",
        "Prepare for further education"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call to save assessment results
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would save to your backend here
    console.log('Assessment results:', answers);
    
    // Redirect to dashboard
    navigate('/dashboard');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-indigo-600">Initial Assessment</h1>
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-gray-200 h-2">
        <div 
          className="bg-indigo-600 h-2 transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left px-4 py-3 rounded-lg border ${
                    answers[currentQuestion] === option 
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {currentQuestion === questions.length - 1 && (
              <button
                onClick={handleSubmit}
                disabled={!answers[currentQuestion] || isSubmitting}
                className={`mt-8 w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ${
                  (!answers[currentQuestion] || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Complete Assessment'}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};