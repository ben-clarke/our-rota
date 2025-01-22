import type { JSX } from "react";
import type { MetaFunction } from "react-router";
import type { Route } from "../../routes/+types/home";
import Welcome from "./components/welcome/welcome";

export const meta: MetaFunction = () => [
  { title: "Our Rota" },
  { name: "description", content: "Organise you rota with ease through the power of AI" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ loaderData }: Route.ComponentProps): JSX.Element => <Welcome />;

export default Home;
