import {
  imgnotfound,
  cSharp,
  cpp,
  js,
  html,
  css,
  sass,
  tailwindcss,
  sql,
  mysql,
  mongodb,
  nodejs,
  vscode,
  vsstudio,
  figma,
  reactjs,
  photoshop,
} from "../assets/images";

const projectData = [
  {
    id: 5,
    name: "Vaccine Booking App",
    desc: "The Vaccine Booking app is an university assignment project in Distributed Application subject.",
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1664009589/portfolio/project-image/vaccine_main_htsrdl.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009589/portfolio/project-image/vaccine_main_htsrdl.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009586/portfolio/project-image/vaccine_02_mfsdvs.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009588/portfolio/project-image/vaccine_03_u1puq0.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009582/portfolio/project-image/vaccine_04_haqxe5.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009583/portfolio/project-image/vaccine_05_mwrvoj.png",
    ],
    techStack: "ReactJS, html, css, js, Nodejs, MongoDB, Redux toolkit",
    github: "https://github.com/tonsisouvanh/vaccine-registration-app",
    website: "",
  },
  {
    id: 1,
    name: "Disney Plus Clone",
    desc: "Disney Plus clone app built with React.js, Styled Components, Firebase (Firestore & Authentication). Responsive UI, Firebase Google Authentication for login, and Firestore for movie data storage.",
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-a_zsms5i.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-b_cwpk0v.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-d_bsa7lg.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-c_pi5rde.png",
    ],
    techStack: "ReactJS, styled-component, html, css, js, Firebase",
    github: "https://github.com/tonsisouvanh/disney-plus-clone",
    website: "https://disney-plus-clone-f3cf5.web.app/",
  },
  {
    id: 2,
    name: "Netflix Clone",
    desc: "Netflix clone app built with React.js, Tailwind CSS, and the TMDB API. Features mobile and desktop responsive design using Tailwind CSS. Implements Firebase email and password authentication for login/signin. Retrieves movie data from the TMDB API.",
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1664005784/portfolio/project-image/netflix_main_eascrf.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664005770/portfolio/project-image/netflix_02_kkgo0z.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664005778/portfolio/project-image/netflix_03_tvm1zo.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664005772/portfolio/project-image/netflix_01_ld4qhy.png",
    ],
    techStack: "ReactJS, Tailwind css, TMDB Api, Firebase",
    github: "https://github.com/tonsisouvanh/netflix-clone",
    website: "https://netflix-clone-devtons.web.app/",
  },
  {
    id: 3,
    name: "Cloths Store App",
    desc: "Practice project using reactjs with static data and deployed on firebase",
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1664006024/portfolio/project-image/stars_main_jqnhbx.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664006019/portfolio/project-image/stars_02_pguvwb.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664006024/portfolio/project-image/stars_01_prwdl1.png",
    ],
    techStack: "ReactJS, html, css, js, firebase",
    github: "https://github.com/tonsisouvanh/clothing-store",
    website: "https://clothing-store-89dd8.web.app/",
  },
  {
    id: 4,
    name: "Delivery Hub",
    desc: "The Deliver Hub app is an university assignment project in Electronic Commerce subject.",
    imgs: [imgnotfound],
    techStack: "ReactJS, html, css, js",
    github: "",
    website: "",
  },

  {
    id: 6,
    name: "Student Management App",
    desc: "This web application allows users with signed up account to check on all students information.Users can log in to the app, where they can add, delete, update student and see numbers of students on dashboard page.The app includes features such as search and filter.",
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1678179868/portfolio/project-image/vnustudentB_e5kydy.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1678179868/portfolio/project-image/vnustudentA_lxgbaj.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1678179868/portfolio/project-image/vnustudentC_sjwlz9.png",
    ],
    techStack:
      "Frontend: React.js, Backend: Firebase, State managment: Redux toolkit, API Call: Async thunck",
    github: "https://github.com/tonsisouvanh/vnustudents-app",
    website: "https://vund-student-management.web.app/students",
  },
];

const techtools = [
  {
    id: 1,
    title: "Languages",
    toolsicons: [cpp, cSharp, js],
    desc: "These are programming language that I have learned in school and selt taught",
  },
  {
    id: 2,
    title: "Front-end",
    toolsicons: [html, css, js, sass, tailwindcss, reactjs],
    desc: "These are my favourite language and framework that helps me created a lot of web app with full responsive ui. And I choose tailwind css as main one for css framewrok, it helps me get a job done faster.",
  },
  {
    id: 3,
    title: "Back-end",
    toolsicons: [sql, mysql, mongodb, nodejs],
    desc: "I usually use these 3 database to store data. On server-side I use nodejs framework to help provide data for front-end",
  },
  {
    id: 4,
    title: "Dev-Tools",
    toolsicons: [vsstudio, vscode, figma, photoshop],
    desc: "These are my favourite tools that I have been using for development.",
  },
];

const categories = [
  "All",
  "Web Development",
  "Customer Service",
  "Graphic Design",
  "Product Quality",
  "Marketing",
  "Sales",
  "Project Management",
  "Communication",
  "Teamwork",
  "Leadership",
  "Others",
];

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Inc.",
    category: "Web Development",
    content:
      "Working with John has been a game-changer for our web development projects. He brings a unique blend of creativity and technical expertise to the table. His attention to detail and commitment to delivering high-quality code is second to none. Highly recommended!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "XYZ Corp.",
    category: "Graphic Design",
    content:
      "Jane's graphic design skills are exceptional. She has a keen eye for aesthetics and a knack for creating visually stunning designs. Whether it's a logo, website layout, or marketing collateral, Jane consistently delivers outstanding work. A true professional!",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    company: "Design Studio",
    category: "Graphic Design",
    content:
      "Sarah is an incredibly talented graphic designer. Her ability to translate ideas into beautiful visuals is remarkable. She understands the importance of branding and always manages to capture the essence of a company's identity in her designs. Working with Sarah is a pleasure!",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Michael Anderson",
    company: "Tech Solutions",
    category: "Web Development",
    content:
      "Emily is a top-notch marketer. Her strategic thinking and creativity have helped our company achieve remarkable results. From crafting compelling ad campaigns to developing effective marketing strategies, Emily consistently exceeds expectations. She's a true marketing genius!",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Emily Wilson",
    company: "Marketing Agency",
    category: "Marketing",
    content: "He is so nice to work with!",
    rating: 4.6,
  },
  {
    id: 6,
    name: "David Thompson",
    company: "E-commerce Solutions",
    category: "Sales",
    content:
      "David's sales strategies have significantly boosted our revenue. He has a deep understanding of customer psychology and knows how to effectively communicate the value of our products. His sales techniques are both persuasive and ethical. Highly recommended!",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Amy Roberts",
    company: "Customer Support Solutions",
    category: "Customer Service",
    content:
      "Amy is an outstanding customer service representative. She consistently goes above and beyond to ensure customer satisfaction. Her friendly demeanor and problem-solving skills make her a valuable asset to our team.",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Richard Johnson",
    company: "Marketing Solutions",
    category: "Marketing",
    content:
      "Richard's marketing strategies have propelled our business to new heights. He has a deep understanding of consumer behavior and knows how to create impactful marketing campaigns. Working with Richard has been a game-changer for our brand.",
    rating: 4.8,
  },
  {
    id: 9,
    name: "Jessica Adams",
    company: "Project Management Agency",
    category: "Project Management",
    content:
      "Jessica is an exceptional project manager. She has a keen eye for detail and excels at coordinating complex projects. Her strong leadership skills and ability to keep projects on track have been instrumental in our success.",
    rating: 4.6,
  },
  {
    id: 10,
    name: "Mark Thompson",
    company: "Graphic Design Studio",
    category: "Graphic Design",
    content:
      "Mark's creativity and attention to detail are unmatched. He consistently delivers stunning designs that perfectly capture our brand's vision. His ability to think outside the box and come up with innovative design solutions is truly impressive.",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Sophie Collins",
    company: "Web Development Agency",
    category: "Web Development",
    content:
      "Sophie is a highly skilled web developer. She has a deep understanding of coding languages and frameworks, allowing her to build complex web applications with ease. Her dedication to quality and problem-solving abilities make her an invaluable team member.",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Daniel Miller",
    company: "Marketing Agency",
    category: "Marketing",
    content:
      "Daniel is a marketing genius. His strategic thinking and data-driven approach have helped our business achieve remarkable growth. He's always up to date with the latest marketing trends and knows how to leverage them to our advantage.",
    rating: 4.8,
  },
  {
    id: 13,
    name: "Jennifer Lee",
    company: "Sales Solutions",
    category: "Sales",
    content:
      "Jennifer is a highly skilled sales professional. She has an innate ability to connect with customers and understand their needs. Her consultative approach and product knowledge have led to numerous successful sales deals.",
    rating: 4.7,
  },
];

export { projectData, techtools, categories, testimonialsData };
