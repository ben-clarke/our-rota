import type { Route } from "../../routes/+types/home";
import { Welcome } from "./components/welcome/welcome";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Our Rota" },
    { name: "description", content: "Organise you rota with ease through the power of AI" },
  ];
};

const Home = ({ loaderData }: Route.ComponentProps) => {
  return <Welcome message={loaderData.message} />;
};

export default Home;
