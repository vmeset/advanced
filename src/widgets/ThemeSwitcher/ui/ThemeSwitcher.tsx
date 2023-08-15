import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import Light from "shared/assets/icons/theme-light.svg";
import Dark from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({
  className,
}: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <button
      className={classNames(cls.themeswitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </button>
  );
};
