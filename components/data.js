import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/landing-01.jpeg";
import benefitTwoImg from "../public/img/landing-02.jpeg";

const benefitOne = {
  title: "Pilot Project (4th Nov 2023)",
  desc: `Nourishing around 70 kids with wholesome meals`,
  image: benefitOneImg,
  isActive: false,
  bullets: [
    {
      title: "70+ Kids Fed",
      desc: "",
      icon: <FaceSmileIcon />,
    },
    // {
    //   title: "Improve acquisition",
    //   desc: "Here you can add the next benefit point.",
    //   icon: <ClipboardDocumentCheckIcon />,
    // },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Upcoming Project (11th Nov 2023)",
  desc: `The upcoming event, scheduled for Saturday, the 11th of November 2023, will take place at Olympic Primary School in Kibera. The meal will consist of chicken stew served with rice, cabbage, and juice.
  This initiative intends to support and nourish 100 children from Kibera after their football practice sessions.`,
  desc_1: `The event promises an engaging, enjoyable, and rewarding experience. Your participation is encouraged to witness the joy of giving.
  Moreover, woven baskets with a 20-litre capacity are available for purchase at 2000KSH or more, with all proceeds dedicated to feeding children in Kibera.`,
  desc_2: `Football gear and footballs are also accepted as donations.
  Your contributions and involvement are crucial, as many children in Kibera lack adequate food at home. Coaches from the area actively participate by providing football training, ensuring the children are engaged and occupied. Your participation in this cause is greatly valued as it makes a significant difference in the lives of these children`,
  image: benefitTwoImg,
  requirements: [
    {
      title: "1kg onions",
    },
    { title: "1kg tomatoes" },
    { title: "1kg coriander (dania)" },
    { title: "5kg potatoes" },
    { title: "10kg rice" },
    { title: "10kg chicken" },
    { title: "10 liters of concentrated juice" },
  ],
  isActive: true,
  // bullets: [
  //   {
  //     title: "100 Kids target",
  //     desc: "Nextly is designed as a mobile first responsive template.",
  //     icon: <FaceSmileIcon />,
  //   },
  //   {
  //     title: "Powered by Next.js & TailwindCSS",
  //     desc: "This template is powered by latest technologies and tools.",
  //     icon: <AdjustmentsHorizontalIcon />,
  //   },
  //   {
  //     title: "Dark & Light Mode",
  //     desc: "Nextly comes with a zero-config light & dark mode. ",
  //     icon: <SunIcon />,
  //   },
  // ],
};

export { benefitOne, benefitTwo };
