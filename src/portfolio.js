/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import gameDeveloper from "./assets/lottie/gameDeveloper";
import machineLearning from "./assets/lottie/machineLearning";



// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  isGameDeveloper: gameDeveloper,
  isMachineLearning : machineLearning, 
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohsin",
  title: "Hi all, I'm Mohsin",

  
  subTitle_light_1:"A passionate ",
  subTitle_light_2: " with experience building NLP systems, Computer Vision applications, recommendation models, and LLM-powered chatbots to solve real-world problems.",
  highlight_light: "Machine Learning Engineer",

  subTitle_dark_1:"A passionate  ",
  subTitle_dark_2: " with 3+ years of experience in Unity, Unreal, C++, C#, AR/VR, 3D modeling, and UI design. Proven track record of developing exceptional games and applications for PC and mobile platforms.",
  highlight_dark: "Game Developer",
  
  resumeLink:
    "https://drive.google.com/drive/folders/1mPJ_Rc3Cu-PR4xljp6sABrOq3TIrbgK5?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mohsin-Ali-Mirza",
  linkedin: "https://www.linkedin.com/in/mohsin-ali-mirza/",
  gmail: "mohsinalimirxa@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "A passionate Game Developer & Machine Learning Enthusiast with experience building innovative games and AI solutions",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   {
  //     skillName: "html-5",
  //     fontAwesomeClassname: "fab fa-html5"
  //   },
  //   {
  //     skillName: "css3",
  //     fontAwesomeClassname: "fab fa-css3-alt"
  //   },
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST National University Of Computer Sciences",
      logo: require("./assets/images/fastLogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2020 - August 2024",
      desc: "Current CGPA: 3.67",
      descBullets: [
        "Rector List (4 SGPA)",
        "3 Consecutive Dean's List (> 3.5 SGPA)"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const reelLink = {
  display: true, //Set it to true to show Proficiency Section
  darkVideoLink : "https://www.youtube.com/watch?v=5yb2N3pnztU",
  videoLink: "https://www.youtube.com/watch?v=IPX-L2F78fU" //Replace this with the link to your portfolio reel video
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Syslab.Ai",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2023 – August 2023",
      desc: "Utilized NLP methods (text classification, Transformers) to auto-map questions to relevant topics, enhancing system efficiency",
      descBullets: [
        "",
        ""
      ]
    },
    {
      role: "Unreal Developer Intern",
      company: "Reality Forge",
      companylogo: require("./assets/images/realityForgeLogo.png"),
      date: "Jan 2023 – Apr 2023",
      desc: "Created a high-fidelity cinematic composition as a completion of Reality Forge’s Unreal Internship Program, utilizing Niagara (Particle System) and Lumen.",
      descBullets: [
        "",
        ""
      ]
    },
    {
      role: "Unity Developer Intern",
      company: "Mindstorm Studios",
      companylogo: require("./assets/images/mindstormLogo.png"),
      date: "July 2022 – Sep 2022",
      desc: "Deployed a 3D hyper casual game with idle stacking game mechanic for Mindstorm Studios Summer Internship Program",
      descBullets: [
        "",
        ""
      ]
    },


    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/gifs/sonic.gif"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        },
        
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Introduction to Machine Learning in Production",
      subtitle:
        "",
      image: require("./assets/images/Certificates/Certificate_Introduction_to_Machine Learning_in_Production_CKD249G59UY8-1.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        }
      ]
    },

    {
      title: "Neural Network And Deep Learning",
      subtitle:
        "",
      image: require("./assets/images/Certificates/Certificate_Neural_Network_And_Deep_Learning_SF2UQZ4TUC2E-1.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        }
      ]
    },

    {
      title: "Introduction To Unreal Engine",
      subtitle:
        "",
      image: require("./assets/images/Certificates/Certificate_RealityForge-Introduction_To_Unreal_Engine-1.png"),
      imageAlt: "RealityForge Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        }
      ]
    },

    {
      title: "Software Engineering Virtual Experience",
      subtitle:
        "",
      image: require("./assets/images/Certificates/Certificate_EA-Software_Engineering_Virtual_Experience-1.png"),
      imageAlt: "EA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        }
      ]
    },

    {
      title: "Mindstorm - Summer Program",
      subtitle:
        "",
      image: require("./assets/images/Certificates/Certificate_Mindstorm-Summer_Program-1.png"),
      imageAlt: "MindStorm Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        }
      ]
    },

    {
      title: "Scrum Foundation-1",
      subtitle:
        "",
      image: require("./assets/images/Certificates/Certificate_Scrum_Foundation-1.png"),
      imageAlt: "CertiProf Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.google.com"
        }
      ]
    },
    


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3317534906",
  email_address: "mohsinalimirxa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  reelLink,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
