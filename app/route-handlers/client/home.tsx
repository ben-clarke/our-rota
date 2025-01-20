import type { Route } from "../../routes/+types/home";
import { Welcome } from "./components/welcome/welcome";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

const Home = ({ loaderData }: Route.ComponentProps) => {
  return <Welcome message={loaderData.message} />;
};

export default Home;
