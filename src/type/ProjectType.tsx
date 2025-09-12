export type Project = {
  id: string;
  title: string;
  img: string;
  alt: string;
  descKey: string;
  tech: CategoryType | "Next.JS";
  github?: string;
  live?: string;
};

export type CategoryType = "All" | "JavaScript" | "React" | "Angular" | "Vue";