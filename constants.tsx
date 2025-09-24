import React from 'react';
import type { Skill, Experience, Project, Education, Interest } from './types';

// Total scrollable height of the page. Adjust this to add more space.
export const TOTAL_SCROLL_HEIGHT = 7000;

// --- RESUME DATA ---

export const TECH_SKILLS_DATA: Skill[] = [
  { name: 'Java', level: 70, icon: <IconBrandJava /> },
  { name: 'C++', level: 90, icon: <IconBrandCpp /> },
  { name: 'HTML', level: 75, icon: <IconBrandHtml5 /> },
  { name: 'SQL', level: 85, icon: <IconDatabase /> },
  { name: 'R', level: 85, icon: <IconLetterR /> },
  { name: 'Git & GitHub', level: 90, icon: <IconBrandGithub /> },
];

export const OTHER_SKILLS_DATA: {title: string, skills: string[]}[] = [
    {
        title: "Application Environments",
        skills: ["Eclipse", "CLion", "VS Code", "Sublime Text", "Microsoft Office"]
    },
    {
        title: "Professional Skills",
        skills: ["Problem Solving", "Leadership", "Communication", "Collaboration", "Adaptability", "Time Management", "Customer Service"]
    },
    {
        title: "Languages",
        skills: ["English (Native)", "Spanish (Proficient)"]
    }
];

export const EDUCATION_DATA: Education[] = [
    {
        school: "Southern Methodist University - Dallas, TX",
        degree: "Bachelor of Arts - Computer Science & Data Science Majors, Business Minor",
        period: "August 2022 - Present",
        details: [
            "Lyle School of Engineering",
            "Relevant Courses: Data Structures, Computer Science (Java & C++), Linear Algebra, Machine Learning, Accounting, Finance, Ethics in Computing, Negotiations, Data Science, Social Corporate Responsibility, Operating Systems, Databases, and Computer System Security.",
            "Member of Beta Theta Pi Fraternity",
        ]
    },
    {
        school: "Corona del Mar High School - Graduate",
        degree: "High School Diploma",
        period: "September 2019 - June 2022",
        details: [
            "AP Courses: Environmental Science, Spanish Language, Calculus AB, Computer Principles.",
            "Completed Coastline Community College Psychology Course.",
        ]
    }
]

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Search Engine',
    description: 'Simple and efficient search engine that pulls relevant documents based on user queries. Implemented my own unordered_map class.',
    tech: ['C++', 'Data Structures'],
    link: 'https://github.com/SMUCS2341/assignment-4-search-engine-g-null-null-gle.git',
    image: 'https://i.ytimg.com/vi/0LTXCcVRQi0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDY-MBP8wz1u0XCYPz_TspjP2iRKg',
  },
  {
    title: 'Sentiment Classifier',
    description: 'Simple tweet classifier that reads tweets from documents, classifies them as positive or negative, and provides accuracy. Implemented my own string class.',
    tech: ['C++', 'Data Structures', 'NLP'],
    link: 'https://github.com/SMUCS2341/assignment-2-don-t-be-sentimental-jackjohnson965.git',
    image: 'https://miro.medium.com/1*jHzNpL-KagnaHUSHzPTPkA.jpeg',
  },
  {
    title: 'Bracket Matcher',
    description: 'Reads through documents with code and checks if corresponding brackets match using a stack. Implemented my own stack based on an array and linked list.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    link: 'https://github.com/SMUCS2341/assignment-3-do-my-brackets-match-jackjohnson965.git',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240916152302/Check-Valid-Parentheses--initially.webp',
  },
   {
    title: 'Website Creation for Private Lending',
    description: 'Created a website for a private lending business to help generate leads and provide an online platform for the business.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.californiaprivatelending.com/',
    image: 'https://images.squarespace-cdn.com/content/v1/68533d9b197afd726a76bb4b/d1a73edd-e60e-4843-aeb5-a9280dfc4303/Screenshot+2025-06-18+at+4.09.29%E2%80%AFPM.png?format=2500w',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Operations Assistant',
    company: 'California Private Lending, Inc. - Newport Beach, CA',
    period: 'June 2025 - August 2025',
    description: [
      'Created social media content in order to raise brand awareness and have an online presence.',
      'Added emails for more clientele.',
      'Worked with a CRM to organize clients and deals.',
    ],
  },
  {
    role: 'Front Desk Attendant',
    company: 'Shape-Up Health and Fitness',
    period: 'May 2023 - Aug 2023 & Aug 2020 - Aug 2021',
    description: [
      'Managed front desk operations, including membership sales, member check-ins, and class scheduling.',
      'Resolved member issues regarding gym equipment and services, ensuring a high level of customer satisfaction.',
      'Maintained cleanliness and inventory of fitness areas, bathrooms, and refreshment stations.',
    ],
  },
  {
    role: 'Intern',
    company: 'Coldwell Banker Realty',
    period: 'December 2021 - May 2022',
    description: [
      'Interned at the nation\'s number one sales volume office for Real Estate.',
      'Assisted the marketing and social media director with campaigns and agent collateral.',
    ],
  },
  {
    role: 'Founder/Director',
    company: 'Summer Camp for Kids with Autism',
    period: 'May 2020 - May 2022',
    description: [
      'Founded and directed a summer camp for local students with autism.',
      'Organized daily activities, coordinated campers and staff, and oversaw all camp operations.',
       'Responsible for creating content, implementing plans and overseeing campers.',
    ],
  },
];

export const INTERESTS_DATA: Interest[] = [
    { name: 'Volunteering', icon: <IconHeartHand /> },
    { name: 'Sports', icon: <IconBallFootball /> },
    { name: 'Programming', icon: <IconCode /> },
    { name: 'Gaming', icon: <IconDeviceGamepad2 /> },
    { name: 'Hackathons', icon: <IconUsersGroup /> },
    { name: 'Traveling', icon: <IconPlane /> },
    { name: 'Photography', icon: <IconCamera /> },
    { name: 'Fitness', icon: <IconBarbell /> },
]

// --- ICONS ---

function IconBrandJava() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-java" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a4 4 0 0 0 4 -4v-10a4 4 0 0 0 -4 -4h-4a4 4 0 0 0 -4 4v10a4 4 0 0 0 4 4h4z" /><path d="M16 11h.01" /><path d="M8 11h.01" /><path d="M12 11h.01" /></svg>;
}

function IconBrandCpp() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-cpp" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 12a4.53 4.53 0 0 0 -4.53 -4.53h-6.94a4.53 4.53 0 1 0 0 9.06h6.94a4.53 4.53 0 0 0 4.53 -4.53z" /><path d="M12 12h.01" /><path d="M6 12h.01" /></svg>;
}

function IconBrandHtml5() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-html5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.5 -2" /></svg>;
}

function IconDatabase() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>;
}

function IconLetterR() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-r" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20v-16h5.5a4.5 4.5 0 0 1 0 9h-5.5" /><path d="M12 13l5 7" /></svg>;
}

function IconBrandGithub() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>;
}

function IconHeartHand() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-hand" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.8 1.034 2.75 .543" /><path d="M14 10l2 2" /></svg>;
}

function IconBallFootball() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-football" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" /><path d="M12 7v-4" /><path d="M4.93 16.5l-3.43 -2.5" /><path d="M19.07 16.5l3.43 -2.5" /><path d="M8 17.16l-3.32 .34" /><path d="M16 17.16l3.32 .34" /></svg>;
}

function IconCode() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>;
}

function IconDeviceGamepad2() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-gamepad-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5h3.5a5 5 0 0 1 0 10h-9a5 5 0 0 1 0 -10h3.5" /><path d="M12 5v10" /><path d="M6 12h-2.5a4.5 4.5 0 0 1 0 -9h1" /><path d="M18 12h2.5a4.5 4.5 0 0 0 0 -9h-1" /><path d="M15 15l.01 0" /><path d="M18 15l.01 0" /></svg>;
}

function IconUsersGroup() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users-group" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>;
}

function IconPlane() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" /></svg>;
}

function IconCamera() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>;
}

function IconBarbell() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barbell" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12h16" /><path d="M16 8v8" /><path d="M8 8v8" /><path d="M18 5v14" /><path d="M6 5v14" /></svg>;
}
