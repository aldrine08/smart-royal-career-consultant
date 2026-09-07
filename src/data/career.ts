export type CareerStage = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  support: string[];
};

export const careerStages: CareerStage[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover Your Direction",
    shortTitle: "Discover",
    description:
      "Begin by understanding your interests, strengths, aspirations and the direction you want your career to take.",
    support: [
      "Clarify your career direction",
      "Identify your strengths and interests",
      "Understand your current position",
    ],
  },

  {
    id: "define",
    number: "02",
    title: "Define Your Next Move",
    shortTitle: "Define",
    description:
      "Turn clarity into a practical direction by identifying the next strategic step in your career.",
    support: [
      "Explore realistic career pathways",
      "Identify appropriate opportunities",
      "Develop a practical career roadmap",
    ],
  },

  {
    id: "develop",
    number: "03",
    title: "Develop Your Capability",
    shortTitle: "Develop",
    description:
      "Build the confidence, presentation, leadership and networking capabilities needed to progress.",
    support: [
      "Strengthen confidence",
      "Improve presentation skills",
      "Develop leadership and networking capability",
    ],
  },

  {
    id: "position",
    number: "04",
    title: "Position Yourself",
    shortTitle: "Position",
    description:
      "Present your skills and experience more effectively for the career opportunities that align with your direction.",
    support: [
      "Review career opportunities",
      "Understand how your experience is positioned",
      "Make informed decisions about opportunities",
    ],
  },

  {
    id: "progress",
    number: "05",
    title: "Progress With Purpose",
    shortTitle: "Progress",
    description:
      "Take strategic steps toward meaningful career progression and greater professional fulfilment.",
    support: [
      "Track your next steps",
      "Strengthen professional direction",
      "Continue developing your potential",
    ],
  },
];