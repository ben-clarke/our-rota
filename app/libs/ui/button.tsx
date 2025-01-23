import type { ButtonHTMLAttributes, JSX, ReactNode } from "react";

const Button = ({ type = "button", children }: ButtonProps): JSX.Element => (
  <div className="flex flex-wrap justify-center gap-6">
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      className="relative flex h-12 w-1/2 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-teal-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
    >
      <span className="relative text-base font-semibold text-white dark:text-dark">{children}</span>
    </button>
  </div>
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default Button;
