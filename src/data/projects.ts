import type { ImageMetadata } from "astro";
import inProgress from "../assets/dummyProjectOne.jpg";
import school from "../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

export interface Project {
  name: string;
  status?: string;
  subheader: string;
  image: ImageMetadata;
  imageAlt: string;
  description: string;
  techStack: string;
  githubUrl: string | null;
  liveUrl: string | null;
}

// Later: move to a content collection (one Markdown file per project/case study).
export const projects: Project[] = [
  {
    name: "Game of the Month",
    status: "In progress",
    subheader: "Full-Stack Web Application",
    image: inProgress,
    imageAlt: "Placeholder artwork for Game of the Month",
    description:
      "Game of the Month is an open-source social server for friendgroups to discuss and decide which games to play together each month. I'm working with a designer currently for UI/UX but will begin backend development shortly keep an eye on my github in the meantime.",
    techStack: "Java, Spring, Node.js, React, Postgres",
    githubUrl: "https://github.com/messenger-trevor",
    liveUrl: null,
  },
  {
    name: "School Projects",
    subheader: "Various Full-Stack Applications",
    image: school,
    imageAlt: "Abstract photo representing school projects",
    description:
      "A repository for school projects to show competency of skills. Some files have been redacted as per project sharing policy.",
    techStack: "Java, Spring, Angular, Docker JPA/Hibernate, MVC, Web Dev",
    githubUrl: "https://github.com/messenger-trevor/school-projects",
    liveUrl: null,
  },
];
