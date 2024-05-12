import image1 from './images/hueImage.jpg';
import image2 from './images/movieDBImage.jpg';
import image3 from './images/crmImage.jpg';
import image4 from './images/byteBarsImage.jpg';
import image5 from './images/medicalImage.png';
import image6 from './images/artistImage.png';

export const PROJECTS = [

    {
        id: 1,
        projectImage: image1,
        projectName: "HUE",
        projectSkills: "DJANGO  PYTHON  JAVASCRIPT  HTML  CSS",
        projectDescription: "Photo sharing Django blogsite for artist and art lovers. Features include uploading, liking and commenting on posts, following and unfollowing other users and personalizing user profile",
        projectLink: "https://github.com/sruthijaganmohan/hue",
    },

    {
        id: 2,
        projectImage: image2,
        projectName: "MOVIEDB",
        projectSkills: "DJANGO  PYTHON  JAVASCRIPT  HTML  CSS",
        projectDescription: "Django website that interacts with Open Movie Database (OMDB) API to search and display movies posters and details. Implemented with authentication and authorization. Additional feature of adding movies to a watchlist.",
        projectLink: "https://github.com/sruthijaganmohan/moviedb",

    },

    {
        id: 3,
        projectImage: image3,
        projectName: "CRM",
        projectSkills: "DJANGO  PYTHON  JAVASCRIPT  HTML  CSS",
        projectDescription: "Django CRM with authentication and role based access. Features include CRUD operations, email integrations and analytics.",
        projectLink: "https://github.com/sruthijaganmohan/crm",

    },

    {
        id: 4,
        projectImage: image4,
        projectName: "FRONT-END E-COMMERCE WEBSITE - BYTEBARS",
        projectSkills: "REACT  JAVASCRIPT  HTML  CSS  FRONT-END DEVELOPMENT",
        projectDescription: "Front-end React e-commerce website for a chocolate bar company with add to cart functionality and authentication.",
        projectLink: "https://github.com/sruthijaganmohan/byte-bars",
    },

    {
        id: 4,
        projectImage: image5,
        projectName: "TOPIC MODELING & TEXT CLASSIFICATION OF MEDICAL TRANSCRIPTIONS",
        projectSkills: "PYTHON  DEEP LEARNING  NATURAL LANGUAGE PROCESSING  DATA ANALYTICS  TEXT MINING",
        projectDescription: "Implemented automated topic extraction and text classification on real world medical transcriptions using Latent Dirichlet Allocation.",
        projectLink: "",

    },

    {
        id: 5,
        projectImage: image6,
        projectName: "ARTIST IDENTIFICATION FROM ART USING CNN",
        projectSkills: "PYTHON  DEEP LEARNING  COMPUTER VISION  DATA ANALYTICS",
        projectDescription: "Identification of artists from images of real world historical paintings using CNN(Convolutional Neural Networks).",
        projectLink: "https://github.com/sruthijaganmohan/Artist-Identification-from-Art",

    },

];