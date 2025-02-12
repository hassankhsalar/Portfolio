"use client";

const MfContent2 = () => {
    const contentData = [
        {
          title: "Trainer Details",
          text: "Here you get to know about the expertise and available days,slots of a trainer.You can also learn about the history and work experience of the trainer",
          image: "https://i.ibb.co.com/fVWp3YXH/image-3.jpg",
        },
        {
          title: "Become Trainer Yourself",
          text: "There's an option for Users to become a Trainer themselve.All they have to do is Fillup the form and submit.An admin will check for eligibility and update the result in Dashboard>Activity Log section.",
          image: "https://i.ibb.co.com/GjwDyYD/image.png",
        },
        {
          title: "Activity Log",
          text: "Users that have applied for the trainer position can monitor their verdict in this section.",
          image: "https://i.ibb.co.com/tTj6XR8d/image.png",
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

export default MfContent2;