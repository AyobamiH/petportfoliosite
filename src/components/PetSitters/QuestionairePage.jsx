import React, { useState } from "react";
// import "tailwindcss/tailwind.css"; // Make sure Tailwind is installed and configured

import { motion } from "framer-motion"; // For smooth animations
import { FaLightbulb } from "react-icons/fa"; // For hints

const questionnaireData = {
  questions: [
    {
      section: "About Your Business",
      questions: [
        {
          id: 1,
          text: "What is the name of your pet care business, and what services do you offer?",
          options: null,
          hint: "Providing a clear name and services helps create a strong brand identity on your website.",
            // Lottie animation for this question
        },
        {
          id: 2,
          text: "What makes your pet care services unique compared to other local competitors?",
          options: null,
          hint: "Highlighting your unique selling points ensures your website stands out from the competition.",
           
        }
      ]
    },
    {
      section: "Target Audience",
      questions: [
        {
          id: 3,
          text: "Who are your ideal clients?",
          options: ["Busy professionals", "Families", "Elderly pet owners", "Vacationers", "Other"],
          hint: "Identifying your target clients will help tailor the website's design and content to their needs.",
           
        },
        {
          id: 4,
          text: "What kind of pets do you primarily serve?",
          options: ["Dogs", "Cats", "Exotic pets", "Small animals", "Other"],
          hint: "Understanding the types of pets you serve will influence the visuals and services highlighted on your website.",
           
        }
      ]
    },
    {
      section: "Website Goals",
      questions: [
        {
          id: 5,
          text: "What is the primary goal of your website?",
          options: ["Attract new clients", "Provide information", "Allow online booking", "Showcase testimonials", "Other"],
          hint: "Your primary goal should guide the overall design and structure of your website.",
           
        },
        {
          id: 6,
          text: "What is the secondary goal of your website?",
          options: ["Build trust through educational content", "Create a community through a blog", "Offer pet care tips", "Other"],
          hint: "Secondary goals can enhance user engagement and build customer loyalty over time.",
           
        }
      ]
    },
    {
      section: "User Experience (UX)",
      questions: [
        {
          id: 7,
          text: "How do you want your customers to feel when they visit your website?",
          options: ["Playful and friendly", "Professional and trustworthy", "Cozy and welcoming", "Other"],
          hint: "The tone and feel of your website should resonate with your target audience and business goals.",
           
        },
        {
          id: 8,
          text: "Which user interactions are most important for you?",
          options: ["Easy navigation", "Clear call-to-actions", "Contact form", "Online booking system", "Other"],
          hint: "Focusing on user experience ensures visitors can easily find the information they need and take action.",
           
        }
      ]
    },
    {
      section: "Website Tone and Style",
      questions: [
        {
          id: 9,
          text: "What style do you envision for your website?",
          options: ["Modern", "Minimalist", "Colorful", "Playful", "Elegant", "Other"],
          hint: "Your website's style should reflect your brand's personality and appeal to your target audience.",
           
        },
        {
          id: 10,
          text: "What type of imagery or themes would resonate best with your clients?",
          options: ["Cute pet images", "Family photos with pets", "Professional service pictures", "Other"],
          hint: "Using the right imagery can create an emotional connection with your audience, making your website more engaging."
        }
      ]
    },
    {
      section: "Website Features",
      questions: [
        {
          id: 11,
          text: "Which features are a must-have for your website?",
          options: ["Online booking", "Service gallery", "Client testimonials", "Pricing information", "Pet care tips blog", "Other"],
          hint: "Prioritizing essential features ensures your website serves both your business and your customers' needs."
        },
        {
          id: 12,
          text: "Do you need an eCommerce feature for selling pet-related products?",
          options: ["Yes", "No"],
          hint: "If you plan to sell products, adding an eCommerce feature will be critical to your site's functionality."
        },
        {
          id: 13,
          text: "Would you like to include a blog or newsletter to share pet care tips and advice?",
          options: ["Yes", "No"],
          hint: "A blog or newsletter can help build trust and engage your audience with valuable pet care information."
        }
      ]
    },
    {
      section: "Content and Updates",
      questions: [
        {
          id: 14,
          text: "How frequently do you plan to update your website?",
          options: ["Monthly blog posts", "Seasonal promotions", "Real-time availability updates", "Other"],
          hint: "Planning regular updates can keep your website fresh and engaging for returning visitors."
        },
        {
          id: 15,
          text: "Would you like your clients to easily access pet-related resources or information on your site?",
          options: ["Yes", "No"],
          hint: "Providing accessible resources, like pet care guides, can enhance your site's value to clients."
        }
      ]
    },
    {
      section: "Call to Action (CTA)",
      questions: [
        {
          id: 16,
          text: "What actions do you want visitors to take on your website?",
          options: ["Book a service", "Contact you", "Subscribe to a newsletter", "Other"],
          hint: "Clear calls-to-action guide visitors toward the key goals of your website, like booking or contacting you."
        },
        {
          id: 17,
          text: "Where would you like the most important CTAs (call-to-action buttons) to be placed?",
          options: ["At the top of the homepage", "After every service description", "At the bottom of pages", "Other"],
          hint: "Strategically placed CTA buttons can significantly increase the chances of visitors taking desired actions."
        }
      ]
    },
    {
      section: "Competitor Insights",
      questions: [
        {
          id: 18,
          text: "Are there any competitor websites that you admire?",
          options: null,
          hint: "Understanding what you like about competitor websites can help shape the design and features of your own."
        }
      ]
    },
    {
      section: "Branding and Design Preferences",
      questions: [
        {
          id: 19,
          text: "Do you already have a logo and branding in place?",
          options: null,
          hint: "Having consistent branding in place ensures a unified look and feel for your website."
        },
        {
          id: 20,
          text: "What are your preferred color schemes?",
          options: ["Bright and playful", "Neutral and calming", "Earthy and natural", "Other"],
          hint: "The color scheme can influence how visitors perceive your brand. Choose colors that align with your vision."
        }
      ]
    },
    {
      section: "Mobile Experience",
      questions: [
        {
          id: 21,
          text: "How important is it for your website to work seamlessly on mobile devices?",
          options: ["Very important", "Somewhat important", "Not important"],
          hint: "With more users accessing websites on mobile devices, optimizing for mobile is essential for user satisfaction."
        }
      ]
    },
    {
      section: "Future Growth",
      questions: [
        {
          id: 22,
          text: "Do you anticipate expanding your services in the future?",
          options: ["Yes", "No"],
          hint: "Planning for growth ensures your website can adapt and scale as your business expands."
        },
        {
          id: 23,
          text: "Would you like your website to have the flexibility to grow with your business?",
          options: ["Yes", "No"],
          hint: "A flexible website design allows you to add new features and content as your business grows."
        }
      ]
    },
    {
      section: "SEO and Analytics",
      questions: [
        {
          id: 24,
          text: "Are you interested in optimizing your website for search engines (SEO) to reach more clients?",
          options: ["Yes", "No"],
          hint: "SEO helps your website rank higher in search results, driving more traffic and potential clients to your site."
        },
        {
          id: 25,
          text: "Would you like to track visitor behavior and engagement using analytics?",
          options: ["Yes", "No"],
          hint: "Using analytics allows you to understand how visitors interact with your site and optimize accordingly."
        }
      ]
    }
  ]
}

const QuestionairePage = () => {
  const allQuestions = questionnaireData.questions.flatMap(section => section.questions);
  const totalQuestions = allQuestions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const currentQuestion = allQuestions[currentQuestionIndex];

  // Handle option selection for multi-select
  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers(prevAnswers => {
      const currentAnswers = prevAnswers[questionId] || [];
      const newAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter(answer => answer !== option) // Deselect if already selected
        : [...currentAnswers, option]; // Select new option
      return {
        ...prevAnswers,
        [questionId]: newAnswers,
      };
    });
    setIsAnswered(true);
  };

  // Handle text input change
  const handleTextInputChange = (questionId, value) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }));
    setIsAnswered(!!value); // Enable next if input is filled
  };

  const handleNext = () => {
    if (isAnswered && currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(!!selectedAnswers[allQuestions[currentQuestionIndex + 1]?.id]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsAnswered(!!selectedAnswers[allQuestions[currentQuestionIndex - 1]?.id]);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)]  py-8 max-w-7xl mx-auto mt-12 px-4">



      <div className="bg-purple-600 text-white text-center py-8 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-2">Find the Perfect Pet Care Website for Your Business</h1>
        <p className="text-lg">Answer a few short questions to help me understand your business needs and design the ideal website for you.</p>
      </div>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Animated Question using framer-motion */}
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="question text-center py-8"
      >
        {/* Question */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 ">{currentQuestion.text}</h2>

        {currentQuestion.options ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentQuestion.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`border rounded-lg p-6 cursor-pointer ${
                  (selectedAnswers[currentQuestion.id] || []).includes(option)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
                onClick={() => handleOptionChange(currentQuestion.id, option)}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={(selectedAnswers[currentQuestion.id] || []).includes(option)}
                  readOnly
                />
                <label className="text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        ) : (
          <input
            type="text"
            className="w-full border rounded-lg p-4 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Type your answer here..."
            onChange={e => handleTextInputChange(currentQuestion.id, e.target.value)}
            value={selectedAnswers[currentQuestion.id] || ""}
          />
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between">
          <button
            className="px-6 py-3 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-400"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          <button
            className={`px-6 py-3 font-bold rounded-lg ${
              isAnswered
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={!isAnswered}
          >
            {currentQuestionIndex === totalQuestions - 1 ? "Submit" : "Next"}
          </button>
        </div>

        {/* Hint Section with Lottie Animation */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg flex items-start shadow-sm">
          <FaLightbulb className="text-blue-600 mr-4" size={32} />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{currentQuestion.hint}</h3>
            <p className="text-gray-600">
              This insight will help you think critically about the choices you make here.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionairePage;
