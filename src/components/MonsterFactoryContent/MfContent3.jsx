"use client";

const MfContent3 = () => {
    const contentData = [
        {
          title: "Pick your Choice",
          text: "Pick the Class that meets your goal along with your preferred trainer!",
          image: "https://i.ibb.co.com/xtz7rYDN/image-4.jpg",
        },
        {
          title: "Learn about the trainer",
          text: "One last look at the Trainers portfolio to be sure of your choice.you can pick an available slot.",
          image: "https://i.ibb.co.com/fVWp3YXH/image-3.jpg",
        },
        {
          title: "Choose your plan",
          text: "There are Beginner,pro and Team plans, one more advance than the other.Pick what suits best for you.",
          image: "https://i.ibb.co.com/r2HG7prK/image-5.jpg",
        },
      ];

    return (
        <div>
        {contentData.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {item.title} <br></br>
            </span>{" "}
            {item.text}
          </p>
          <img
            src={item.image}
            alt={item.title}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
  ))};
      </div>
    );
};

export default MfContent3;