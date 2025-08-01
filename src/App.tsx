import { useEffect } from "react";
import Logo from "./components/Logo";
import PageHeader from "./components/PageHeader";
import BloodDonationForm from "./components/BloodDonationForm";
import LegalNotice from "./components/LegalNotice";
import Copyright from "./components/Copyright";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language;
    i18n.changeLanguage(userLanguage.split("-")[0]);
  }, [i18n]);

  return (
    <>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("tr")}>TR</button>
      <Logo />
      <PageHeader />
      <BloodDonationForm />
      <LegalNotice />
      <Copyright />
    </>
  );
}

export default App;
