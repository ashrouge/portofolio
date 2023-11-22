import classNames from "classnames";
import { ProjectTypes } from "./types";

export const cx = classNames;

export const navData = ["About", "Experience", "Works", "Contact"]

export const projects: ProjectTypes[] = [
  {
    title: "Daily News Actual",
    description: "A News Website as the final assignment in the Teaching Factory Program (TEFA) at Telkom Indonesia. Developed using Next.js 13 and Tailwind CSS.",
    tech: ["Next js", "Tailwind CSS"],
    code: 'https://github.com/Dannaire/NewsWeb',
    live: 'https://daily-news-actual.vercel.app/',
    thumnail: "portfolio-v2.png",
    featured: true
  },

  {
    title: "GuideGame (GIGA)",
    description: "GuideGame or GIGA is the design of an online learning website specifically for game development. In addition, this website features asset buying and selling, which will undoubtedly facilitate game developers.",
    tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    live: 'https://www.figma.com/file/3xOTGGOMginFLCLnhkpyEi/GuideGame-(GIGA)?type=design&noA1&mode=design&t=05J35snsvVPHEgi8-1',
    thumnail: "dg-team.png",
    featured: true
  },

  {
    title: "Kelompok 5 Website",
    description: "Group 5 Website is the profile website of the members of Group 5 from Teaching Factory (TEFA) specializing in Front-end. Here, you can find the Group 5 Profile Video, the personal data, and social media of each member, as well as a calculator feature.",
    tech: ["React js", "CSS"],
    live: 'https://kelompok5-react.vercel.app/',
    thumnail: "airebix.png",
  },

  {
    title: "NgantinYuk! Logo",
    description: "NgantinYuk! Logo is the logo used in the NgantinYuk! series at SMK Telkom Malang. This series is about reviewing the food available at the SMK Telkom Malang cafeteria.",
    tech: ["Adobe Illustrator"],
    live: 'https://amazon-nw.vercel.app/',
    thumnail: "amazon.png"
  },

  {
    title: "NextGenCity",
    description: "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    code: "",
    live: 'https://nextgencity.vercel.app/',
    thumnail: "powermall.png"
  },

  {
    title: "WiGo Lern!",
    description: "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
    tech: ["Figma", "Adobe Photoshop"],
    code: "",
    live: 'https://nextgencity.vercel.app/',
    thumnail: "powermall.png"
  },

  {
    title: "Carrier Bag",
    description: "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
    tech: ["Next js", "Tailwind CSS"],
    code: "https://github.com/rasyidridho05/CarrierBag",
    live: 'https://carrier-bag.vercel.app/',
    thumnail: "powermall.png"
  },

  {
    title: "Banner Design",
    description: "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
    tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    thumnail: "powermall.png"
  },
]

export const manufacturers = [
  "ADV",
  "Beat",
  "Beat Street",
  "CBR",
  "Genio",
  "Scoopy",
  "Vario",
];

export const allCars = [
  {
    name: "Vario 125 Advance Matte Blue",
    price:"Rp  25.700.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/vario-matteblue.webp",

  },
  {
    name: "Vario 125 Advance Matte White",
    price: "Rp 25.700.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/vario-mattewhite.webp",

  },
  {
    name: "Vario 125 Advance Matte Black",
    price: "Rp 25.700.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/vario-matteblack.webp",

  },
  {
    name: "Vario 125 Sporty Red",
    price: "Rp 24.010.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/vario-sportyred.webp",
  },
  {
    name: "Vario 125 Sporty Black",
    price: "Rp 24.010.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/vario-sportyblack.webp",

  },
  {
    name: "Beat Street Black",
    price: "Rp 20.280.000",
    type: "-",
    layanan: "Cash/Kredit",
    image: "/beatstreetblack.webp",

  },
  {
    name: "Beat Street Silver",
    price: "Rp 20.280.000",
    type: "160 cc",
    layanan: "Cash/Kredit",
    image: "/beatstreetsilver.webp",

  },
  {
    name: "Beat Deluxe Black",
    price: "-",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/beatdeluxeblack.webp",

  },
  {
    name: "Beat Deluxe Green",
    price: "-",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/beatdeluxegreen.webp",

  },
  {
    name: "Beat Deluxe Silver",
    price: "-",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/beatdeluxesilver.webp",
  },
  {
    name: "Beat Deluxe Blue",
    price: "-",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/beatdeluxeblue.webp",
  },
  {
    name: "Beat Funk Red Black",
    price: "-",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/beatfunkred.webp",
  },
  {
    name: "Beat Jazz Silver Black",
    price: "-",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/beatjazzsilver.webp",
  },
  {
    name: "Beat Techno Blue",
    price: "-",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/beattechnoblue.webp",
  },
  {
    name: "Beat Hard Rock Black",
    price: "-",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/beathardrock.webp",
  },
  {
    name: "Genio Fabulous Matte Green",
    price: "Rp 21.621.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/geniomattegreen.webp",
  },
  {
    name: "Genio Fabulous Matte Blue",
    price: "Rp 21.621.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/geniomatteblue.webp",
  },
  {
    name: "Genio Fabulous Matte Black",
    price: "Rp 21.621.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/geniomatteblack.webp",
  },
  {
    name: "Genio Radiant Red Black",
    price: "Rp 21.081.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/genioradiantred.webp",
  },
  {
    name: "Genio Radiant Silver Black",
    price: "Rp 21.081.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/genioradiantsilver.webp",
  },
  {
    name: "Genio Radiant Black",
    price: "Rp 21.081.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/genioradiantblack.webp",
  },
  {
    name: "Scoopy Prestige Black",
    price: "Rp 23.970.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/scoopyprestigeblack.webp",
  },
  {
    name: "Scoopy Prestige White",
    price: "Rp 23.970.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/scoopyprestigewhite.webp",
  },
  {
    name: "Scoopy Stylish Red",
    price: "Rp 23.970.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/scoopystylishred.webp",
  },
  {
    name: "Scoopy Stylish Green",
    price: "Rp 23.970.000",
    type: "CBS-ISS",
    layanan: "Cash/Kredit",
    image: "/scoopystylishgreen.webp",
  },
  {
    name: "Scoopy Fashion Blue",
    price: "Rp 23.096.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/scoopyfashionblue.webp",
  },
  {
    name: "Scoopy Fashion Brown",
    price: "Rp 23.096.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/scoopyfashionbrown.webp",
  },
  {
    name: "Scoopy Sporty Grey",
    price: "Rp 23.096.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/scoopysportygrey.webp",
  },
  {
    name: "Scoopy Sporty Red",
    price: "Rp 23.096.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/scoopysportyred.webp",
  },
  {
    name: "Vario Grande Matte White ABS",
    price: "Rp 31.393.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/variowhitematte.webp",
  },
  {
    name: "Vario Grande Matte Black ABS",
    price: "Rp 31.393.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/varioblackmatte.webp",
  },
  {
    name: "Vario Grande Matte White CBS",
    price: "Rp 28.641.000",
    type: "CBS-SP",
    layanan: "Cash/Kredit",
    image: "/variowhitemattecbs.webp",
  },
  {
    name: "Vario Grande Matte Black CBS",
    price: "Rp 28.641.000",
    type: "CBS-SP",
    layanan: "Cash/Kredit",
    image: "/varioblackmattecbs.webp",
  },
  {
    name: "Vario Active Matte Black",
    price: "Rp 28.391.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/varioactiveblackmatte.webp",
  },
  {
    name: "Vario Active Matte Red",
    price: "Rp 31.393.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/varioredmatte.webp",
  },
  {
    name: "PCX Magnificent Red",
    price: "Rp 33.600.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/pcxmagnificentred.webp",
  },
  {
    name: "PCX Royal Matte Blue",
    price: "Rp 33.600.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/pcxroyalmatteblue.webp",
  },
  {
    name: "PCX Wonderful White",
    price: "Rp 33.600.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/pcxwonderfulwhite.webp",
  },
  {
    name: "PCX Brilliant Black",
    price: "Rp 33.600.000",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/pcxbrillliantblack.webp",
  },
  {
    name: "PCX Imperial Matte Blue",
    price: "Rp 37.240.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/pcximperialmatteblue.webp",
  },
  {
    name: "PCX Wonderful White ABS",
    price: "Rp 37.240.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/pcxwonderfullwhiteabs.webp",
  },
  {
    name: "PCX Majestic Matte Red",
    price: "Rp 37.240.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/pcxmajesticmattered.webp",
  },
  {
    name: "PCX Glorious Matte Black",
    price: "Rp 37.240.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/pcxgloriousmatteblack.webp",
  },
  {
    name: "ADV Tough Matte Brown",
    price: "Rp 40.195.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/advmatebrown.webp",
  },
  {
    name: "ADV Tough Matte Red",
    price: "Rp 40.195.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/advmatered.webp",
  },
  {
    name: "ADV Tough Matte Black",
    price: "Rp 40.195.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/advmateblack.webp",
  },
  {
    name: "ADV Tough Matte White",
    price: "Rp 40.195.000",
    type: "ABS",
    layanan: "Cash/Kredit",
    image: "/advmatewhite.webp",
  },
  {
    name: "ADV Dynamic Gray",
    price: "Rp 36.963.500",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/advdiamicgray.webp",
  },
  {
    name: "ADV Dynamic White",
    price: "Rp 36.963.500",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/advdynamicwhite.webp",
  },
  {
    name: "ADV Dynamic Red",
    price: "Rp 36.963.500",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/advdynamicred.webp",
  },
  {
    name: "ADV Dynamic Black",
    price: "Rp 36.963.500",
    type: "CBS",
    layanan: "Cash/Kredit",
    image: "/advdynamicblack.webp",
  },
]