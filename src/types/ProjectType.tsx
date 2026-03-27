export type Project = {
  id: string;
  title: string;
  img: string;
  alt: string;
  descKey: string;
  tech: CategoryType;
  github?: string;
  live?: string;
  video?: string;
};

export type CategoryType = "All" | "JavaScript" | "React" | "Angular" | "Vue" | "Next.JS" | "Python";