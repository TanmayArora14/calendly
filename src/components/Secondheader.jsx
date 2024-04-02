import React from "react";

const HelpSection = () => {
  const activities = [
    { icon: "🔵", title: "Setting up your first event" },
    { icon: "⚠️", title: "Troubleshooting availability" },
    { icon: "📽️", title: "Schedule with video conferencing" },
    { icon: "📂", title: "Embed options overview" },
    { icon: "🔄", title: "Automate tasks with Workflows" },
    { icon: "🌐", title: "Using Calendly for Chrome" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white py-8 px-4  rounded-lg w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold">
            What can we help you with?
          </h2>
          <div className="relative mt-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search our articles"
              className="text-center  w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sr-only sm:not-sr-only"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                <span className="text-xl">{activity.icon}</span>
                <span className="text-sm md:text-base">{activity.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
