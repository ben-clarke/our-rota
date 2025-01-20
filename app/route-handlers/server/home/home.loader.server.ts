import type { Route } from ".react-router/types/app/routes/+types/home";

export const loader = ({ context }: Route.LoaderArgs) => {
  return { message: context.VALUE_FROM_VERCEL };
};
