export type Project = {
  id: string;
  title: string;
  img: string;
  alt: string;
  descKey: string;
  tech: "JavaScript" | "React" | "Angular" | "Vue" | "Next.JS";
  github?: string;
  live?: string;
};