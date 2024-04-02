import React from "react";

const Categories = () => {
  const categories = [
    {
      icon: "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-inbox-icon-png-image_856753.jpg",
      title: "Getting Started",
      description:
        "Learn the basics, connect your calendar, and discover features that will make scheduling easier.",
    },
    {
      icon: "https://cdn-djeki.nitrocdn.com/vLUugKtJLMkeqMsJmnxZRvWarndHoWqe/assets/images/optimized/rev-885a2db/www.driversupport.com/wp-content/uploads/2019/04/Desktop-Icons-Not-Showing-Up.png",
      title: "Using Calendly",
      description: "Availability, Event Type Settings, and Multi-user features",
    },
    {
      icon: "https://i.pinimg.com/1200x/55/5c/cf/555ccf63ace943a9e4f5f84f2fed99a0.jpg",
      title: "Calendly For Mobile",
      description: "Mobile Apps for iOS & Android",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKWdZQ2anAcReNWjV75ZRx3sEngcKgjPc06pWozkGVT8F_-gD-Kw5ez0tlxeMQ3MX9nw&usqp=CAU",
      title: "Integrations & Automations",
      description:
        "Includes Calendar Connections, Calendly Integrations, Workflows, and Embed Options.",
    },
    {
      icon: "https://i.fbcd.co/products/resized/resized-750-500/d525acef04a28c158abcc5c6b48b2fcde749d0bf68cba219b884455d11f45c04.jpg",
      title: "Account Settings",
      description:
        "Includes Billing, Security, SAML/SCIM setup, and account options.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2g9KyWur-7nnGTlQROobQB1YN737sshmLEQ&usqp=CAU",
      title: "Video Tutorials",
      description:
        "Watch these short videos to learn about getting started with Calendly.",
    },
  ];

  return (
    <div className="bg-white py-6 px-4 rounded-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="flex justify-center items-center text-3xl font-extrabold text-gray-900 mb-8">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-center"
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-500">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
