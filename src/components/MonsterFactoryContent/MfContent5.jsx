"use client";

const MfContent5 = () => {
    const contentData = [
        {
          title: "Admin Dashboard",
          text: "Numerous Option for Admin to take control over all the operation in one simple tab!",
          image: "https://i.ibb.co.com/dsXc4n3p/image-12.jpg",
        },
        {
          title: "New Forum",
          text: "Trainer and Admin both can add new forum.",
          image: "https://i.ibb.co.com/pjFzFR9c/image-11.jpg",
        },
        {
          title: "Manage Slot",
          text: "Trainer will be able to check for their booked slot, Add slot or delete slot.",
          image: "https://i.ibb.co.com/DH82JXfs/image-9.jpg",
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

export default MfContent5;