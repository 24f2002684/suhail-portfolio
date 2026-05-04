export type ProjectCategory = "web" | "ai" | "robotics" | "iot" | "hackathon";
export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year?: string;
  links?: {
    github?: string;
    demo?: string;
    post?: string;
  };
  images?: string[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  ai: "AI",
  robotics: "Robotics",
  iot: "IoT",
  hackathon: "Hackathon",
};

export const projects: Project[] = [
  {
    title: "Sample Project With Image",
    slug: "sample-project",
    summary:
      "A dummy project entry that shows how images, links, technologies, category, and featured status work.",
    description:
      "This sample project is here only as a learning template. Replace the title, summary, description, image path, tech stack, and links with your real project details when you add your own work.",
    tech: ["React", "Vite", "Portfolio", "Sample Data"],
    category: "web",
    status: "completed",
    featured: false,
    year: "2026",
    links: {
      github: "https://github.com/24f2002684/suhail-portfolio",
      demo: "https://suhail-portfolio-alpha.vercel.app",
      post: "https://www.linkedin.com/in/suhailaktharsm",
    },
    images: ["/projects/sample-project/me.jpg"],
  },
  {
    title: "RoadSense",
    slug: "roadsense",
    summary: "Smart road safety and monitoring platform for detecting and mapping road hazards.",
    description:
      "RoadSense uses AI and sensor data to identify road hazards, map them, and provide real-time visibility for safer roads and better maintenance decisions.",
    tech: ["AI", "Sensor Data", "Mapping", "Web Platform"],
    category: "ai",
    status: "completed",
    featured: true,
    year: "2026",
  },
  {
    title: "ShopSphere",
    slug: "shopsphere",
    summary: "Full-stack e-commerce app with auth, cart, checkout, admin product control, and REST APIs.",
    description:
      "ShopSphere is a complete e-commerce web application using Node.js, Express, MongoDB, sessions, Bootstrap, authentication, cart flows, checkout, and admin-only product management.",
    tech: ["Node.js", "Express", "MongoDB", "Bootstrap", "REST APIs"],
    category: "web",
    status: "completed",
    featured: true,
  },
  {
    title: "EcoFinds",
    slug: "ecofinds",
    summary: "Hackathon marketplace for sustainable second-hand goods.",
    description:
      "EcoFinds is an OLX-like second-hand goods app built during a hackathon to encourage reuse and sustainability through local marketplace listings.",
    tech: ["Flask", "SQLite", "HTML", "CSS"],
    category: "hackathon",
    status: "completed",
    featured: true,
  },
  {
    title: "Voice Controlled Robotic Hand",
    slug: "voice-controlled-robotic-hand",
    summary: "Assistive robotic hand controlled by voice commands for useful everyday actions.",
    description:
      "An Arduino-based robotic hand using Bluetooth, gear motors, a motor driver shield, and voice control to perform actions such as gripping objects, turning on a fan, and switching lights.",
    tech: ["Arduino UNO", "Bluetooth", "Gear Motors", "Motor Driver"],
    category: "robotics",
    status: "completed",
    featured: true,
  },
  {
    title: "Vehicle Parking System",
    slug: "vehicle-parking-system",
    summary: "Parking lot management web app currently in progress.",
    description:
      "A Flask, SQLite, HTML, and CSS web application for managing parking lots and simplifying slot tracking workflows.",
    tech: ["Flask", "SQLite", "HTML", "CSS"],
    category: "web",
    status: "in-progress",
    featured: false,
  },
  {
    title: "Voice Controlled Humanoid Robot",
    slug: "voice-controlled-humanoid-robot",
    summary: "Robot that responds to voice commands, moves, lights up, and performs actions.",
    description:
      "A humanoid-style robot using Arduino UNO and Nano that can shake hands, lift objects, move on the floor, and respond to voice commands.",
    tech: ["Arduino UNO", "Arduino Nano", "Voice Control", "Robotics"],
    category: "robotics",
    status: "completed",
    featured: false,
  },
  {
    title: "Bluetooth Controlled RC Car",
    slug: "bluetooth-controlled-rc-car",
    summary: "Smartphone-controlled RC car built using Arduino and Bluetooth.",
    description:
      "A Bluetooth-controlled car using Arduino UNO, gear motors, a motor driver shield, and a Bluetooth module, controlled through a smartphone.",
    tech: ["Arduino UNO", "Bluetooth", "Gear Motors", "Mobile Control"],
    category: "robotics",
    status: "completed",
    featured: false,
  },
  {
    title: "Weather Monitoring Pico Satellite",
    slug: "weather-monitoring-pico-satellite",
    summary: "Sensor-based weather monitoring prototype using Raspberry Pi Pico.",
    description:
      "A compact weather monitoring prototype with Raspberry Pi Pico, SD card module, smoke sensor, gyroscope, and accelerometer sensors.",
    tech: ["Raspberry Pi Pico", "Sensors", "SD Card Module", "IoT"],
    category: "iot",
    status: "completed",
    featured: false,
  },

  {
    title: "Automatic Hand Sanitizer",
    slug: "automatic-hand-sanitizer",
    summary: "Touch-free sanitizer dispenser built with Arduino and an ultrasonic sensor.",
    description:
      "An automatic hand sanitizer system using Arduino UNO, motor pump, and ultrasonic sensor to dispense sanitizer without touch.",
    tech: ["Arduino UNO", "Ultrasonic Sensor", "Motor Pump"],
    category: "iot",
    status: "completed",
    featured: false,
  },
];
