import { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I find the best bus route between two locations?",
      answer:
        "We've got you covered! Just enter your starting point and destination in the search bar, and our app will suggest the most optimal route based on real bus stop data in Kolkata.",
    },
    {
      question: "Do I need to sign up to use the app?",
      answer:
        "Nope! You can use all the core features—like route search and bus stop exploration—without creating an account. Just open the app and start exploring!",
    },
    {
      question: "Are the bus stop details up-to-date?",
      answer:
        "Yes, we regularly update our bus stop data to reflect the current routes in Kolkata. If you notice a missing or incorrect stop, you can report it directly from the app.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "Currently, you need an internet connection to access route data. However, we're working on offline support in future updates to make your travel even smoother!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-2xl p-8 mx-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Title and description */}
          <div>
            <h2 className="text-4xl italic mb-2">Any questions?</h2>
            <h3 className="text-4xl italic mb-6">We got you.</h3>

            <p className="text-gray-600 mb-8">
              Find quick solutions to common queries about using the app and
              navigating Kolkata’s bus system with ease.
            </p>

            <Link to="/faq">
              <button className="flex items-center text-indigo-600 hover:text-indigo-300 font-medium cursor-pointer">
                More FAQs
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          {/* Right column - FAQ items */}
          <div>
            {/* Collapsible FAQ items */}
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center border-b pb-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="font-medium">{faq.question}</div>
                  <div className="text-gray-400">
                    {openIndex === index ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v12M6 12h12"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* FAQ answer */}
                {openIndex === index && (
                  <div className="mt-2 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
