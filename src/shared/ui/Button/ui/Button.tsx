import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button = ({
  className,
  children,
  theme,
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
