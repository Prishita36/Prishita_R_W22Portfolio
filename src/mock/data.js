import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Prishita Ribadia | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Prishita Ribadia',
  subtitle: "I'm a Front-End JavaScript Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Front-End JavaScript Developer in MERN Stack.',
  paragraphTwo:
    'Currently in my fourth semester of George Brown College pursuing Computer Programmer Analyst.',
  paragraphThree:
    'I have a professional experience of 1 Year including Freelancing and Professional Projects.',
    resume: 'https://drive.google.com/file/d/1OdNViwJYucbT5wvUBxx0OMghb7ENHLpa/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'shopping.jpg',
    title: 'Online Shopping Project (Python)',
    info: 'Academic Project developed using Python.',
    info2:
      'Developed using Python. The application is a CRUD application with functionalities for Admin and User.',
        url: 'https://github.com/Prishita36/Online-Shopping-Python/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robot.jpg',
    title: 'Robot Friends (MERN Stack)',
    info: 'Developed as a learning project using MERN Stack.',
    info2:
      'Developed as a part of academics, this application is able to detect faces in a picture using API, integrated with login & signup process.',
      url: 'https://github.com/Prishita36/Robot-Friends/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'movie.jpg',
    title: 'Movies Database Application (MERN Stack)',
    info: 'Academic Project developed as a part of group using MERN Stack.',
    info2:
      'The Application is created using React, Redux and includes Dynamic Search. The application uses API to retrieve information from TMDB API using axios and saving user preference including their likes and comments in database.',
    url: 'https://github.com/kashyap1808/Movies-Database-React',
  },  
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out!',
  btn: '',
  email: 'prishita36@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/prishita-r-235014112/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Prishita36',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
