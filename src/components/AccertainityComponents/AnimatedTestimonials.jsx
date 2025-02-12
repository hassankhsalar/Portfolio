import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import peddy from '/peddy.png';
import visa from '/VNH.png';
import boi from '/bc.png';
import bistro from '/bistro.png';
import monster from '/monster.png';

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A modern Fitness hub with numerous next gen training modules and best trainers in the field TODAY! users can select their desired class with the trainer of their choice at their convenient time and its all ONLINE!",
      name: "Monster Factory",
      designation: "Fitness Hub and Marketplace",
      src: monster,
      link: '/monsterfactory'
    },
    {
      quote:
        "This solution makes things easier for users to check and apply for their desired VISA online! ",
      name: "Visa Navigator",
      designation: "Visa Application portal",
      src: visa,
      link: '/visanavigator'
    },
    {
      quote:
        "Boi-Chai is the future of virtual Libraries. Boi-chai allows users to book their desired book online.it also keeps check on stock and a few restrictions",
      name: "Boi chai",
      designation: "Virtual Library",
      src: boi,
      link: '/boichai'
    },
    {
      quote:
        "Peddy is a pet adoption site. Adoptable pets are categorized in a visually pleasing manner allowing users to find their desired furry companion easily!",
      name: "peddy pets",
      designation: "Pet Adoption site",
      src: peddy,
      link: '/monsterfactory'
    },
    {
      quote:
        "Bistro-Boss makes things easy for both customers and service team to keep track of orders and menus",
      name: "Bistro Boss",
      designation: "Restaurant Order Management portal",
      src: bistro,
      link: '/monsterfactory'
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
