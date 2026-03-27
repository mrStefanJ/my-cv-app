import TableTennis from "../assets/images/table-tennis.png";
import MovieSeries from "../assets/images/movie-serie-app.png";
import Quiz from "../assets/images/Quiz.png";
import Employee from "../assets/images/crud-app.png";
import Managment from "../assets/images/school-management.png";
import Prototype from "../assets/images/prototype-web.png";
import CrudAdvance from "../assets/images/vue-crud.png";
import ReactPythonCRUD from "../assets/images/react-python.png";
import PingPong from '../assets/images/ping-pong.png';
import MultiverseRunner from "../assets/images/multiverse-runner.png";
import Menjaza from '../assets/images/menjaza.png';

import MultiverseRunnerVideo from '../assets/videos/miltivers-runner.mp4';
import { Project } from "../types/ProjectType";

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
  },
  {
    id: "ping-pong-game",
    title: "Pin Pong",
    img: PingPong,
    alt: "ping pong game",
    descKey: "projectTen",
    tech: "Python",
    github: "https://github.com/mrStefanJ/ping-pong"
  },
  {
    id: "multiverse-runner-game",
    title: "Multiverse Runner",
    img: MultiverseRunner,
    alt: "multiverse runner game",
    descKey: "projectEleven",
    tech: "Python",
    github: "https://github.com/mrStefanJ/multiverse-runner",
    video: MultiverseRunnerVideo,
  },
  {
    id: "menjaza",
    title: "Menjaza",
    img: Menjaza,
    alt: "menjaza slicica",
    descKey: "projectTwelve",
    tech: "Vue",
    github: "https://github.com/mrStefanJ/menjaza",
    video: "",
  }
];
