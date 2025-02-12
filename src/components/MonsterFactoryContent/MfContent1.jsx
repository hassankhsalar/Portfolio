"use client";

const MfContent1 = () => {
    const contentData = [
        {
          title: "Straight to The point",
          text: "The most hyped classes are featured in realtime. This allows users to make their decision easily",
          image: "https://i.ibb.co.com/cKcscTFk/image.jpg",
        },
        {
          title: "Reviews",
          text: "Testimonials are shown in this section by real users along with Ratings shown in stars.Users can share their thoughts,like or dislikes about the classes,trainers,slots or management.",
          image: "https://i.ibb.co.com/b5NkMf0Z/image-1.jpg",
        },
        {
          title: "Community Forums",
          text: "Numerous blogs are shared here.Blogs are mostly written by Admins or Experienced trainer that are expert in their consequent field for more than 10 years!",
          image: "https://i.ibb.co.com/R4cJJGmS/image-2.jpg",
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

export default MfContent1;