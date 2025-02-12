"use client";

const MfContent4 = () => {
    const contentData = [
        {
          title: "Checkout",
          text: "Take one last look at the products in your cart.You also have the remove and wishlist opotion.",
          image: "https://i.ibb.co.com/b5sRXjYL/image-6.jpg",
        },
        {
          title: "Easy Payment method",
          text: "Easy payment method with Stripe and SSLCommerz.quick and simple",
          image: "https://i.ibb.co.com/sdVbr33Q/image-7.jpg",
        },
        {
          title: "Check Enrolled Classes",
          text: "List of enrolled classes with the option to leave a review!",
          image: "https://i.ibb.co.com/7J9GmpcR/image-8.jpg",
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

export default MfContent4;