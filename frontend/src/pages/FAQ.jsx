import { useState } from 'react';

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How is BusBondhu different from other navigation apps?",
      answer: "While other apps focus on general navigation, BusBondhu is made specifically for Kolkata's bus network. We provide bus stop-level accuracy, Bengali-friendly naming, and focus on public routes used by lakhs every day."
    },
    {
      question: "Is BusBondhu suitable for daily commuters and first-time travelers?",
      answer: "Yes! Whether you're a daily commuter or a tourist new to Kolkata, BusBondhu simplifies the complex bus network. It helps regular users find faster routes and new users feel confident navigating the city."
    },
    {
      question: "Does the app support accessibility features?",
      answer: "We're committed to making public transport more inclusive. BusBondhu's interface is designed for readability and ease of use, and future updates will include voice search and support for screen readers."
    },
    {
      question: "What new features are planned in upcoming versions?",
      answer: "We're working on live bus tracking, smart route suggestions based on traffic, Bengali language support, and user-reported updates on stop conditions. Your feedback directly shapes these features!"
    },
    {
      question: "Do I need an internet connection to use BusBondhu?",
      answer: "Yes, currently an internet connection is required to fetch the latest bus stop and route data. However, we are exploring offline capabilities for frequently searched routes in future updates."
    },
    {
      question: "Can I save my favorite routes or stops?",
      answer: "Not yet—but it's on our roadmap! Soon, users will be able to bookmark common locations and get quick access to recently searched routes."
    },
    {
      question: "How accurate is the route suggestion?",
      answer: "Our routing engine is built using real bus data and is regularly updated to reflect route changes. While it's highly accurate, we recommend checking with conductors or bus boards for real-time changes."
    },
    {
      question: "Will this app work for private and mini buses too?",
      answer: "Yes! BusBondhu includes data for government, private, and mini buses—making it easier to find options across all categories."
    },
    {
      question: "Is there a way to contribute or report an error in the app?",
      answer: "Yes, we're building a feature that allows users to report issues with routes or stops. In the meantime, you can contact us directly through the feedback section in the app."
    },
    {
      question: "Is BusBondhu available in Bengali?",
      answer: "Not yet, but it's coming soon! We understand the importance of language in accessibility and are actively working on a fully localized Bengali version of the app."
    }
  ];

  return (
    <div className="bg-[#212121] min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden bg-[#212121] text-white">

        {/* Hero Section */}
        <div className="text-center px-4 py-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-green-500 text-black rounded-full text-xs font-medium mb-4">Support</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">How can we <span className="text-green-400">help?</span></h1>
          <p className="text-gray-400 text-sm md:text-base">
            Find answers to your questions, get step-by-step tutorials, and
            access resources to help you make the most of BusBondhu.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center -mt-6">
          <img src="/bus-transparent.png" alt="Bus Illustration" className="opacity-50 mt-10" />
        </div>


        {/* FAQ Section */}
        <div className="bg-white text-black px-4 py-12 rounded-t-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Left Column - Title */}
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-sm">
                  Have questions about Kolkata buses or the BusBondhu app? Here are some helpful answers to improve your commute and understand how our app supports your travel needs in the city.
                </p>
              </div>
              
              {/* Right Column - FAQ Items */}
              <div className="md:w-2/3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <button 
                      className="flex justify-between items-center w-full text-left font-medium"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100">
                        {openFaqIndex === index ? (
                          <span className="text-lg">-</span>
                        ) : (
                          <span className="text-lg">+</span>
                        )}
                      </div>
                    </button>
                    {openFaqIndex === index && (
                      <div className="mt-2 text-gray-600 text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}