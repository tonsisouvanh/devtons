import { imgnotfound, cSharp, cpp, js, html, css, sass, tailwindcss, sql, mysql, mongodb, nodejs, vscode, vsstudio, figma, reactjs, photoshop } from '../assets/images/idnex'

const projectData = [
  {
    id: 1,
    name: 'Disney Plus Clone',
    desc: 'This porject was built to focus on front-end with responsive ui, firebase google authentication for login/signin and firestore to store movie data',
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-a_zsms5i.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-b_cwpk0v.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-d_bsa7lg.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1645154746/portfolio/project-image/disney-plus-c_pi5rde.png",
    ],
    techStack: 'ReactJS, styled-component, html, css, js, Firebase',
    github: 'https://github.com/tonsisouvanh/disney-plus-clone',
    website: 'https://disney-plus-clone-f3cf5.web.app/',
  },
  {
    id: 2,
    name: 'Netflix Clone',
    desc: 'This porject was built to focus on front-end with mobile/desktop responsive using tailwind css, firebase email and password authentication for login/signin. I choose TMDB api to get all movie data',
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1664005784/portfolio/project-image/netflix_main_eascrf.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664005770/portfolio/project-image/netflix_02_kkgo0z.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664005778/portfolio/project-image/netflix_03_tvm1zo.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664005772/portfolio/project-image/netflix_01_ld4qhy.png",
    ],
    techStack: 'ReactJS, Tailwind css, TMDB Api, Firebase',
    github: 'https://github.com/tonsisouvanh/netflix-clone',
    website: 'https://netflix-clone-devtons.web.app/',
  },
  {
    id: 3,
    name: 'Cloths Store App',
    desc: 'Practice project using reactjs with static data and deployed on firebase',
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1664006024/portfolio/project-image/stars_main_jqnhbx.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664006019/portfolio/project-image/stars_02_pguvwb.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664006024/portfolio/project-image/stars_01_prwdl1.png",
    ],
    techStack: 'ReactJS, html, css, js, firebase',
    github: 'https://github.com/tonsisouvanh/clothing-store',
    website: 'https://clothing-store-89dd8.web.app/',
  },
  {
    id: 4,
    name: 'Delivery Hub',
    desc: 'The Deliver Hub app is an university assignment project in Electronic Commerce subject.',
    imgs: [imgnotfound],
    techStack: 'ReactJS, html, css, js',
    github: '',
    website: '',
  },
  {
    id: 5,
    name: 'Vaccine Booking App',
    desc: 'The Vaccine Booking app is an university assignment project in Distributed Application subject.',
    imgs: [
      "https://res.cloudinary.com/shoppin/image/upload/v1664009589/portfolio/project-image/vaccine_main_htsrdl.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009589/portfolio/project-image/vaccine_main_htsrdl.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009586/portfolio/project-image/vaccine_02_mfsdvs.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009588/portfolio/project-image/vaccine_03_u1puq0.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009582/portfolio/project-image/vaccine_04_haqxe5.png",
      "https://res.cloudinary.com/shoppin/image/upload/v1664009583/portfolio/project-image/vaccine_05_mwrvoj.png",
    ],
    techStack: 'ReactJS, html, css, js, Nodejs, MongoDB, Redux toolkit',
    github: 'https://github.com/tonsisouvanh/vaccine-registration-app ',
    website: '',
  },
];

const techtools = [
  {
    id: 1,
    title: 'Languages',
    toolsicons: [cpp, cSharp, js],
    desc: 'These are programming language that I have learned in school and selt taught',
  },
  {
    id: 2,
    title: 'Front-end',
    toolsicons: [html, css, js, sass, tailwindcss, reactjs],
    desc: 'These are my favourite language and framework that helps me created a lot of web app with full responsive ui. And I choose tailwind css as main one for css framewrok, it helps me get a job done faster.',
  },
  {
    id: 3,
    title: 'Back-end',
    toolsicons: [sql, mysql, mongodb, nodejs],
    desc: 'I usually use these 3 database to store data. On server-side I use nodejs framework to help provide data for front-end',
  },
  {
    id: 4,
    title: 'Dev-Tools',
    toolsicons: [vsstudio, vscode, figma, photoshop],
    desc: 'These are my favourite tools that I have been using for development.',
  },
]

export { projectData, techtools };