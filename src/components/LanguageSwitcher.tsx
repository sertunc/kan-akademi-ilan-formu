import { useTranslation } from "react-i18next";

const AVAILABLE_LANGUAGES = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="language-switcher">
      {AVAILABLE_LANGUAGES.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={`language-button ${
            i18n.language === language.code ? "active" : ""
          }`}
          type="button"
          aria-label={`Switch to ${language.label}`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}