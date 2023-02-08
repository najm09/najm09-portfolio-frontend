import profile from '../assets/profile.png'
import github from '../assets/github_icon.png'
import linkedin from '../assets/linkedin_icon.png'
import twitter from '../assets/twitter_icon.png'
import leetcode from '../assets/leetcode.png'
import cert from '../assets/certC++.jpg'
import FET from '../assets/FET.jpg'

export const PROFILE_DETAILS = {
  "username" : "najm09",
  "name": "Fakhra Najm",
  "email": "fnajm09@gmail.com",
  "image": profile,
  "about": "I am a highly motivated and hard working individual with decent coding and problem solving skills",
}

export const ACADEMIC_DETAILS = {

  "institution": "Jamia Millia Islamia",
  "image" :FET,
  "faculty": "Faculty of Engineering and Technology",
  "department": "Department of Electrical Engineering",
  "Batch" : "2019-2023",
  "current_year": "4th",
  "current_semester": "VIIIth",
  "CPI": 9.115,
  "extra_curricullar_activities": {
    "position": "Technical Head",
    "organization": "IEEE JMI Student Branch",
    "summary": "As the technical head of the IEEE JMI Student Branch, I worked on the Admil panel, which is a tool that helps manage and organize the work of student branches. I was responsible for leading a team of students in the development and implementation of the Admil panel, which included tasks such as gathering requirements, designing and building the system, and testing and debugging.",
    "Tech_stacks": ["ReactJs", "NodeJs", "Firebase"]
  },
  "course_works": ["Datastructures and Algorithms", "Object Oriented Programming", "Computer Networking"],
  "certifications": [
    {
      "title": "Deep dive in C++ programming language - beginner to advance",
      "certificate": cert
    },
    {
      "title": "Mastering Data Structures and Algorithms using C and C++ programming languages",
      "certificate": cert
    }
  ]
}

export const PROJECT_DETAILS = [
  {
    "id": 0,
    "title": "Smart Queuing Management System",
    "Tag": "Minor Project",
    "brief": "A smart queuing management system for healthcare is a project that aims to improve the efficiency of the queueing process in healthcare facilities. The system is designed to prioritize senior citizens, who may require more attention and have different healthcare needs compared to younger patients. An efficient algorithm is developed to determine the position of insertion for latecomers into the queue, in order to reduce the overall response time of the entire queue.",
    "features": "The entire process is automated using a web application, which helps to streamline the queue management process and improve the patient experience. The goal of the project is to improve the efficiency and effectiveness of the healthcare system by reducing wait times and improving patient care.",
    "technical_details": "",
    "tech_stack": [
      "ReactJs",
      "Nodejs",
      "Mongodb"
    ]
  },
  {
    "id": 1,
    "title": "Perfect Cup",
    "Tag": "Learning Project",
    "brief": "The Perfect Cup project is a learning project that focuses on user authentication using PHP and MySQL. PHP is a programming language that is commonly used for web development, while MySQL is a popular database management system.In this project, the goal is to develop a system that allows users to create accounts and log in to access certain features or content on a website. The system will use PHP and MySQL to securely store and manage user credentials, such as username and password.The user authentication system will likely involve the implementation of various security measures, such as password hashing and salting, to protect against common security threats such as password cracking and SQL injection attacks.",
    "features": "",
    "technical_details": "",
    "tech_stack": [
      "Html",
      "Css",
      "Php",
      "Mysql"
    ]
  },
  {
    "id": 2,
    "title": "Music-master",
    "Tag": "Learning Project",
    "brief": "The Music-master project is a project that integrates with the Spotify API to provide a music streaming platform. The project is developed using the React JavaScript library and is designed to learn and practice using React.",
    "features": "The Music-master project includes features for searching for artists and their tracks, playing and pausing tracks, and other functionality related to music streaming. The integration with the Spotify API allows users to access a wide range of music tracks and artists from the Spotify library.",
    "technical_details": "The project is developed using React classful components, which are a type of React component that is implemented using class-based syntax. Classful components allow developers to define and manage the state and behavior of a component using class methods, such as the constructor and render methods.",
    "tech_stack": [
      "ReactJs"
    ]
  },
  {
    "id": 3,
    "title": "Exercise-Tracker",
    "Tag": "Learning Project",
    "brief": "The project is an exercise tracker that allows users to create and log their exercise activities.Overall, the project provided a hands-on learning experience for building a full-stack web application using the MERN stack and implementing CRUD operations in Node.js.",
    "features": "Through the project, users can create their exercise log, add details about their workouts, and view their exercise history.",
    "technical_details": "It was built using the MERN stack, which consists of MongoDB, Express, React, and Node.js.The project involved learning CRUD (Create, Read, Update, Delete) operations in Node.js, which are fundamental for building web applications.",
    "tech_stack": [
      "ReactJs",
      "Nodejs",
      "Mongodb",
      "Express JS"
    ]
  },
  {
    "id": 4,
    "title": "Banking-System-cli",
    "Tag": "OOPs Project",
    "brief": "The project is a command-line interface (CLI) application for a banking system that allows users to perform various banking operations.Overall, the project provides a hands-on learning experience for implementing object-oriented programming principles in C++ and building a functional CLI application for a banking system.",
    "features": "The project includes features such as creating an account, deleting an account, making cash deposits, and making cash withdrawals.",
    "technical_details": "It was built using object-oriented programming principles in C++.The project utilizes concepts such as inheritance, polymorphism, and encapsulation to implement the various banking operations in a structured and efficient way.",
    "tech_stack": [
      "C++",
      "OOPS"
    ]
  },
  {
    "id": 5,
    "title": "todo-tracker",
    "Tag": "Learning Project",
    "brief": "The project is a to-do tracker that allows users to create and manage their to-do lists.",
    "features": "The project allows users to add and remove to-dos from their list and includes a feature to generate a new to-do list.",
    "technical_details": "It was built using HTML, CSS, and JavaScript.While building the project, Learned the concept of local storage, which allows web applications to store data locally within the user's browser.",
    "tech_stack": [
      "Html",
      "Css",
      "Javascript"
    ]
  }
]

export const SKILLS_DETAILS = {
  "primary_skills" : [ "Coding", "Problem solving", "Web development"],
  "programming_languages": ["C", "C++", "JavaScript", "Php"],
  "web_technologies": ["Html", "Css", "ReactJs", "NodeJs", "materialUi", "Bootstrap", "RESTful APIs"],
  "cloud_technologies": ["Google Firebase(Familiar)", "Mongodb Atlas(Familiar)"],
  "database": ["Mysql"],
  "other_tools": ["Git", "Postman", "Vscode", "ubuntu"]
}

export const SOCIAL_PROFILE__DETAILS = [
  {
    "id" : 1,
    "image": linkedin,
    "name": "linkedin",
    "link": "https://linkedin.com/in/najm09"
  },
  {
    "id" : 2,
    "image": github,
    "name": "github",
    "link": "https://github.com/najm09"
  },
  {
    "id" : 3,
    "image": twitter,
    "name": "twitter",
    "link": "https://twitter.com/fnajm09"
  },
  {
    "id" : 4,
    "image": leetcode,
    "name": "leetcode",
    "link": "https://leetcode.com/najm09"
  }
]


