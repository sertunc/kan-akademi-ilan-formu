import { useEffect } from "react";
import Swal from "sweetalert2";
import PageHeader from "./components/PageHeader";
import BloodDonationForm from "./components/BloodDonationForm";
import LegalNotice from "./components/LegalNotice";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Swal.fire({
      text: t("greeting"),
      confirmButtonText: t("close"),
    });
  }, [t]);

  useEffect(() => {
    const userLanguage = navigator.language;
    i18n.changeLanguage(userLanguage.split("-")[0]);
  }, [i18n]);

  return (
    <div className="app">
      <LanguageSwitcher />
      <PageHeader />
      <BloodDonationForm />
      <LegalNotice />
    </div>
  );
}

export default App;
