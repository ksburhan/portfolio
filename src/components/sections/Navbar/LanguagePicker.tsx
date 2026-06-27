import classNames from "classnames";
import { ChangeEvent, FC, MouseEvent } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Language, languageOptions } from "../../../data/translations";

interface LanguagePickerProps {
  className?: string;
}

const LanguagePicker: FC<LanguagePickerProps> = ({ className }) => {
  const { language, setLanguage, t } = useLanguage();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  const stopPropagation = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <label className={classNames("flex items-center gap-2", className)} onClick={stopPropagation}>
      <span className="sr-only">{t.navbar.languageLabel}</span>
      <select
        aria-label={t.navbar.languageLabel}
        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium hover:border-sky-300 focus:border-sky-300 focus:outline-none"
        onChange={onChange}
        value={language}>
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguagePicker;
