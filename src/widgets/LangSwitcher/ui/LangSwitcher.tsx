import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Button, ButtonTheme } from "shared/ui/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18next.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      onClick={toggleLang}
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {t("язык")}
    </Button>
  );
};
