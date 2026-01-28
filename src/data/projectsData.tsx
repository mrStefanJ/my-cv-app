import TableTennis from "../assets/table-tennis.png";
import MovieSeries from "../assets/movie-serie-app.png";
import Quiz from "../assets/Quiz.png";
import Employee from "../assets/crud-app.png";
import Managment from "../assets/school-management.png";
import Prototype from "../assets/prototype-web.png";
import CrudAdvance from "../assets/vue-crud.png";
import ReactPythonCRUD from "../assets/react-python.png"
import { Project } from "../type/ProjectType";

export const projects: Project[] = [
  {
    id: "quiz",
    title: "Quiz",
    img: Quiz,
    alt: "Quiz App",
    descKey: "projectOne",
    tech: "JavaScript",
    github: "https://github.com/mrStefanJ/quiz-app",
    live: "https://quiz-for-programmer.netlify.app/",
  },
  {
    id: "movie",
    title: "Movie App",
    img: MovieSeries,
    alt: "Movie Series App",
    descKey: "projectTwo",
    tech: "React",
    github: "https://github.com/mrStefanJ/movie-app",
    live: "https://movies-series-v1.netlify.app/",
  },
  {
    id: "table-tennis",
    title: "Table Tenis",
    img: TableTennis,
    alt: "table tennis",
    descKey: "projectThree",
    tech: "React",
    github: "https://github.com/mrStefanJ/table-tennis",
    live: "https://table-tenis-v1.netlify.app",
  },
  {
    id: "employee",
    title: "Employee",
    img: Employee,
    alt: "employee",
    descKey: "projectFour",
    tech: "Angular",
    github: "https://github.com/mrStefanJ/crud-app-angular",
    live: "https://crud-operation-user.netlify.app/",
  },
  {
    id: "management",
    title: "School Management",
    img: Managment,
    alt: "school management",
    descKey: "projectFive",
    tech: "Next.JS",
    github: "https://github.com/mrStefanJ/management-dashboard",
  },
  {
    id: "prototype",
    title: "Prototype Basic",
    img: Prototype,
    alt: "prototype",
    descKey: "projectSix",
    tech: "React",
    github: "https://github.com/mrStefanJ/basic-web-site",
    live: "https://prototype-responsive.netlify.app/",
  },
  {
    id: "crud-advanced",
    title: "CRUD advanced",
    img: CrudAdvance,
    alt: "crud advanced",
    descKey: "projectSix",
    tech: "Vue",
    github: "https://github.com/mrStefanJ/Vue/tree/main/vue-crud-advanced",
  },
  {
    id: "crid-react-python",
    title:"FullStack CRUD",
    img: ReactPythonCRUD,
    alt: "crud react python",
    descKey:"projectNine",
    tech: "React",
    github: "https://github.com/mrStefanJ/react-python-crud"
  }
];
