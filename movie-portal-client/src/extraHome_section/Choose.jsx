import React from "react";

const Choose = () => {
  const benefits = [
    {
      id: 1,
      title: "Stream Anytime, Anywhere",
      description: "Watch your favorite movies and shows on the go.",
      emoji: "📱",
    },
    {
      id: 2,
      title: "Ad-Free Entertainment",
      description: "Enjoy uninterrupted streaming with no ads.",
      emoji: "🚫",
    },
    {
      id: 3,
      title: "Exclusive Content",
      description: "Access movies and series only available here.",
      emoji: "🎥",
    },
    {
      id: 4,
      title: "Download and Watch Offline",
      description: "Save videos and watch even without an internet connection.",
      emoji: "⬇️",
    },
  ];

  return (
    <div className="  py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-start b rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-sm ">{benefit.description}</p>
            <span className="text-2xl mt-4">{benefit.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
