"use client";
//import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import MfContent1 from "../../components/MonsterFactoryContent/MfContent1";
import MfContent2 from "../../components/MonsterFactoryContent/MfContent2";
import MfContent3 from "../../components/MonsterFactoryContent/MfContent3";
import MfContent4 from "../../components/MonsterFactoryContent/MfContent4";
import MfContent5 from "../../components/MonsterFactoryContent/MfContent5";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know About Monster-Factory
      </h2>
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "Interactive Landing Page",
    title: "Grabs attention instantly",
    src: "https://i.ibb.co.com/F4mLXGh5/mf1.jpg",
    content: <MfContent1></MfContent1>,
  },
  {
    category: "Trainer List",
    title: "Trainer Portfolios",
    src: "https://i.ibb.co.com/d4Ngvs8d/mf2.jpg",
    content: <MfContent2></MfContent2>,
  },
  {
    category: "Class List",
    title: "Tailored programme and Trainer",
    src: "https://i.ibb.co.com/v40ghntJ/mf3.jpg",
    content: <MfContent3></MfContent3>,
  },
  {
    category: "Cart",
    title: "Stripe and SSLcommerz gateway",
    src: "https://i.ibb.co.com/5wv3jTs/mf6.jpg",
    content: <MfContent4></MfContent4>,
  },
  {
    category: "Admin Dash",
    title: "Trainer Class and Slot Management features",
    src: "https://i.ibb.co.com/ccs18nyw/mf5.jpg",
    content: <MfContent5></MfContent5>,
  },
];

export default AppleCardsCarouselDemo;
