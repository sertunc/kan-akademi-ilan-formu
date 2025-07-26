import { useEffect } from "react";
import Swal from "sweetalert2";
import PageHeader from "./components/PageHeader";
import BloodDonationForm from "./components/BloodDonationForm";
import LegalNotice from "./components/LegalNotice";

function App() {
  useEffect(() => {
    Swal.fire({
      //title: "Bilgilendirme",
      text: "Geçmiş olsun dileklerimizi iletiyoruz. Umarız en kısa sürede uygun kan bulunur ve sağlığınıza kavuşursunuz. Yanınızdayız!",
      //icon: "info",
      confirmButtonText: "Kapat",
    });
  }, []);

  return (
    <>
      <PageHeader />
      <BloodDonationForm />
      <LegalNotice />
    </>
  );
}

export default App;
