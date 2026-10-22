export const about = {
  name: "Alexandru Balta",
  role: "Software Engineer",
  subtitle: "Full-Stack · Java & React",
  description:
    "I like building software end to end, from the database to the UI. I'm an MSc student in Distributed Systems at Babeș-Bolyai University, I shipped a production feature at 8x8, and I'm building Crate, a Letterboxd for albums.",
  resume: `${process.env.PUBLIC_URL}/Alexandru_Balta_Resume.pdf`,
  social: {
    linkedin: "https://www.linkedin.com/in/alexandru-balta",
    github: "https://github.com/kerBiy",
  },
};

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "8x8",
    location: "Cluj-Napoca, Romania",
    period: "Jul 2025 – Sep 2025",
    highlights: [
      "Built and shipped the Favorite Customers feature to production (Spring Boot, Hibernate/JPA, React, Liquibase) for an internal tools platform used daily by 100+ employees.",
      "Preloaded and cached favorite client profiles in the background, replacing a ~1s client lookup with one-click access.",
      "Presented the feature to engineering executives and stakeholders in California.",
    ],
  },
];

export const education = [
  {
    degree: "MSc in Distributed Systems",
    school: "Babeș-Bolyai University, Cluj-Napoca",
    period: "Oct 2026 – Jul 2028 (expected)",
  },
  {
    degree: "BSc in Computer Science",
    school: "Babeș-Bolyai University, Cluj-Napoca",
    period: "Oct 2023 – Jul 2026",
  },
];

export const projects = [
  {
    name: "Crate — Letterboxd for Albums",
    pitch: "Rate and review albums with friends, built as event-driven microservices.",
    highlights: [
      "React frontend, a Spring Cloud Gateway with JWT auth, and three Spring Boot microservices with isolated PostgreSQL databases.",
      "Rating aggregates synced across services with Kafka events and idempotent consumers, verified by 149 Testcontainers integration tests in GitHub Actions.",
      "Built a search evaluation harness and redesigned ranking with ListenBrainz data, raising top-3 accuracy from 13/30 to 28/30.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "React", "TypeScript", "Docker"],
    sourceCode: "https://github.com/kerBiy/crate",
    // TODO(alex): add the Crate live demo URL here; the "Live site" button appears once it's set.
    livePreview: "",
    image: {
      src: `${process.env.PUBLIC_URL}/img/projects/crate.jpg`,
      alt: "Crate album page for Kid A by Radiohead, showing the average rating, a rating histogram and friends' reviews",
      width: 1200,
      height: 750,
      position: "top left",
    },
  },
  {
    name: "SNN Brain Explorer",
    pitch: "Bachelor's thesis with the CRIStAL Laboratory (Univ. of Lille): a visualization tool for latency-coded Spiking Neural Networks.",
    highlights: [
      "Makes neuron timing visible, where other tools only showed outputs.",
      "FastAPI backend turns canvas drawings into MNIST inputs for the lab's C++ simulator; a React dashboard replays neuron activity layer by layer.",
      "RAG-powered GPT-4o assistant that explains SNN dynamics and diagnoses classification errors.",
    ],
    stack: ["React", "FastAPI", "Python", "C++", "OpenAI API"],
    sourceCode: "https://github.com/kerBiy/snn-brain-explorer",
    image: {
      src: `${process.env.PUBLIC_URL}/img/projects/snn-brain-explorer.jpg`,
      alt: "SNN Brain Explorer Interactive Lab showing pool1 spike-timing maps, mean latency per channel and a playback slider",
      width: 1200,
      height: 649,
      position: "top left",
    },
  },
  {
    name: "Real-Time Messaging Platform",
    pitch: "A responsive chat app with real-time messaging.",
    highlights: [
      "Instant messaging between users over Socket.IO.",
      "Registration and login, with users and chats stored in MongoDB.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind"],
    sourceCode: "https://github.com/kerBiy/simple-chat",
    image: {
      src: `${process.env.PUBLIC_URL}/img/projects/simple-chat.jpg`,
      alt: "Real-time chat interface with a contacts sidebar and an open conversation",
      width: 1600,
      height: 865,
      position: "top left",
    },
  },
  {
    name: "Job Finder",
    pitch: "A cross-platform mobile app using React Native, enabling users to search for jobs, view details.",
    stack: ["React Native", "Expo", "JavaScript"],
    sourceCode: "https://github.com/kerBiy/job-finder",
    image: {
      src: `${process.env.PUBLIC_URL}/img/projects/job-finder-cover.jpg`,
      alt: "Job Finder home screen and job detail screen on two phones",
      width: 1600,
      height: 1000,
    },
  },
  {
    name: "Sorting Visualizer",
    pitch: "A desktop app that animates sorting algorithms in real time.",
    highlights: [
      "Visualizes Bubble, Selection, Insertion, Merge and Quick Sort step by step.",
      "Qt GUI written in C++.",
    ],
    stack: ["C++", "Qt"],
    sourceCode: "https://github.com/kerBiy/sorting-visualizer",
    // TODO(alex): replace the placeholder with a real screenshot.
    image: {
      src: `${process.env.PUBLIC_URL}/img/projects/sorting-placeholder.jpg`,
      alt: "Placeholder image, a screenshot is still to come",
      width: 1600,
      height: 1000,
    },
  },
  {
    name: "Space Dodge",
    pitch: "A classic game made with PyGame where you dodge the falling asteroids.",
    stack: ["Python", "Pygame"],
    sourceCode: "https://github.com/kerBiy/space-dodge",
    image: {
      src: `${process.env.PUBLIC_URL}/img/projects/space-dodge.jpg`,
      alt: "Space Dodge gameplay: an astronaut dodging falling asteroids",
      width: 1020,
      height: 633,
    },
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "C++", "Bash", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Hibernate/JPA", "React", "Redux Toolkit", "Node.js", "FastAPI", "Tailwind"],
  },
  {
    category: "Data & Messaging",
    items: ["PostgreSQL", "Kafka", "MongoDB", "Liquibase", "RESTful APIs", "JWT"],
  },
  {
    category: "Testing & DevOps",
    items: ["JUnit", "Mockito", "Testcontainers", "WireMock", "Jest", "Docker", "GitHub Actions", "Gradle", "Git"],
  },
  {
    category: "Languages",
    items: ["Romanian (native)", "English (C1)"],
  },
];

export const contact = {
  email: "alexandrubalta222@gmail.com",
  location: "Cluj-Napoca, Romania",
  availability: "Available for full-time backend or full-stack roles, on-site or hybrid in Cluj-Napoca, or remote across Europe.",
};
