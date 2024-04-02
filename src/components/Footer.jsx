import React from "react";

const HelpCenterComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start">
      <div className="py-8 px-4 md:py-28 md:px-14 md:w-2/4 mb-8 md:mb-0">
        <h2 className="text-gray-600 text-2xl font-bold">Easy </h2>
        <h2 className="text-blue-600 text-2xl font-bold mb-4">ahead </h2>
        <p className="text-gray-600 mb-6">
          We take the work out of connecting with others so you can accomplish
          more.
        </p>
        <div className="flex items-center">
          <select className="bg-gray-200 rounded-md py-2 px-4 mr-4">
            <option>English (US)</option>
            {/* Add more language options */}
          </select>
        </div>
        <div className="flex items-center mt-4 md:mt-20">
          <a href="#" className="mr-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5eea55952eed1b281e9d46d9/1608214025630-HRLIO60JFA3QXOGXCI5D/bode+nyc+App+Store+Icon.jpg"
              alt="App Store"
              className="h-6 md:h-9"
            />
          </a>
          <a href="#" className="mr-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR3ki7arWk58s6WJ8MBY2tKR5Fx8UqBFXX67ZDqsI&s"
              alt="Google Play"
              className="h-6 md:h-8"
            />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap">
          <a href="#" className="mr-4 mb-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"
              alt="Twitter"
              className="h-6 md:h-7"
            />
          </a>
          <a href="#" className="mr-4 mb-2">
            <img
              src="https://i.pinimg.com/736x/b8/d6/9b/b8d69bfad379fbc0c7163b08e2928f67.jpg"
              alt="Facebook"
              className="h-6 md:h-8"
            />
          </a>
          <a href="#" className="mr-4 mb-2">
            <img
              src="https://cdn.vectorstock.com/i/500p/30/30/instagram-circular-black-icon-vector-29783030.jpg"
              alt="Instagram"
              className="h-6 md:h-8"
            />
          </a>
          <a href="#" className="mr-4 mb-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14n9r_7n6AF4PvdOXtJZjgcgomil7q__XTk_hcREJrA&s"
              alt="LinkedIn"
              className="h-6 md:h-8"
            />
          </a>
          <a href="#" className="mr-4 mb-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/102/066/original/youtube-icon-outline-style-isolated-on-white-background-free-vector.jpg"
              alt="YouTube"
              className="h-6 md:h-8"
            />
          </a>
        </div>
      </div>

      <div className="py-8 px-4 md:py-28 md:px-5 md:w-2/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">About</h3>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              About Calendly
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Contact Sales
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Newsroom
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Careers
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Security
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Solutions</h3>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Customer Success
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Sales
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Recruiting
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Information Technology
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Marketing
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">
            Popular Features
          </h3>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Embed Calendly
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Availablity
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Send Notifications
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Developers
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Using Calendly Mobile
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Developers</h3>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Help Center
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Video Tutorials
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Add-Ons</h3>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Download for Chrome
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Download for Firefox
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <div className="py-2">
            <a href="#" className="text-gray-600 hover:text-gray-200">
              Developer Tools
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterComponent;
