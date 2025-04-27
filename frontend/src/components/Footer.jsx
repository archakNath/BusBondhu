export default function Footer() {
  return (
    <footer className="text-white">
      {/* Large App Name */}
      <div className="container mx-auto px-4">
        <img src="/BUSBONDHU_fading.png" alt="" className="w-full mt-18" />
      </div>

      {/* Footer Content Columns */}
      <div className="container mx-auto px-8 bg-[#212121] py-12 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 - Main CTA */}
          <div className="space-y-4">
            <div className="flex items-center text-sm mb-3">
              <span className="w-4 h-4 inline-block bg-green-400 rounded-full mr-2"></span>
              <span>
                We're the urban care set to the right of local & discovery spot
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Find routes and optimize your design journeys, forever.
            </p>
            <button className="bg-green-400 text-black font-medium text-sm py-2 px-4 rounded-full hover:bg-green-500">
              Book a call
            </button>
            <button className="border border-gray-700 text-gray-300 font-medium text-sm py-2 px-4 rounded-full hover:bg-gray-800 mt-2">
              See our plans
            </button>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400">
                  Log in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Our work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Scope of work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal Info */}
          <div>
            <h4 className="font-medium mb-4">Legal Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 className="font-medium mb-4">Contact us</h4>
            <a
              href="mailto:contact@busbondhu.in"
              className="text-sm text-gray-400 hover:text-green-400"
            >
              contact@busbondhu.in
            </a>
            <div className="mt-4">
              <button className="bg-gray-900 text-white text-sm py-2 px-4 rounded hover:bg-gray-800">
                Book a call
              </button>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-green-400"
              >
                Chat with us
              </a>
            </div>
          </div>

          {/* Column 5 - Made By */}
          <div>
            <h4 className="font-medium mb-4">Made by Kolkata Roads</h4>
            <a
              href="mailto:roadsmasters@bus.in"
              className="text-sm text-gray-400 hover:text-green-400"
            >
              roadsmasters@bus.in
            </a>
            <div className="mt-4">
              <a
                href="https://twitter.com/busbondhu"
                className="flex items-center text-sm text-gray-400 hover:text-green-400"
              >
                Follow on{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
