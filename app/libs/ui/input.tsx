import type { InputHTMLAttributes, JSX, LabelHTMLAttributes, ReactNode } from "react";

const Input = ({ id, type, placeholder, children }: InputProps): JSX.Element => (
  <>
    {children && <Label id={id}>{children}</Label>}
    <input
      type={type}
      className="border rounded-full px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
      placeholder={placeholder}
    />
  </>
);

const Label = ({ id, children }: LabelHTMLAttributes<HTMLLabelElement>): JSX.Element => (
  <label htmlFor={id} className="font-semibold text-xs text-gray-400 -my-1">
    {children}
  </label>
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export default Input;
