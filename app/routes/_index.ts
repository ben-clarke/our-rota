import { redirect, type LoaderFunction } from "react-router";

export const loader: LoaderFunction = () => redirect("/home");
