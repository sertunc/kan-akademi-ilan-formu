import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      translation: {
        greeting: "Geçmiş olsun dileklerimizi iletiyoruz. Umarız en kısa sürede uygun kan bulunur ve sağlığınıza kavuşursunuz. Yanınızdayız!",
        close: "Kapat",
        headerTitle: "Kan Akademi",
        headerDesc: "Kan bağışı ihtiyacı olan hastalar için kolayca ilan oluşturabilirsiniz. Lütfen aşağıdaki formu doldurun ve görseli bize iletin",
        formTitle: "Kan Bağışı İlanı",
        bloodGroup: "Kan Grubu",
        bloodGroupType: "Kan Grubu Türü",
        bloodType: "Kan Türü",
        donationType: "Bağış Türü",
        patientName: "Hasta Adı",
        phone: "Telefon",
        date: "Tarih",
        hospitalOrLocation: "Hastane / Bağış Yeri",
        select: "Seçiniz",
        submit: "Gönder",
        legalNotice: "Girilen bilgiler hiçbir şekilde sunucuda veya başka bir ortamda saklanmaz. Formu doldurduktan sonra veriler yalnızca görsel üzerinde gösterilir ve gizliliğiniz korunur.",
        redBlood: "Kırmızı Kan",
        platelet: "Trombosit",
        granulocyte: "Granülosit",
        plasma: "Plazma",
        stemCell: "Kök Hücre",
      },
    },
    en: {
      translation: {
        greeting: "We wish you a speedy recovery. We hope suitable blood is found soon and you regain your health. We are with you!",
        close: "Close",
        headerTitle: "Blood Academy",
        headerDesc: "You can easily create an announcement for patients in need of blood donation. Please fill out the form below and send us the image",
        formTitle: "Blood Donation Announcement",
        bloodGroup: "Blood Group",
        bloodGroupType: "Blood Group Type",
        bloodType: "Blood Type",
        donationType: "Donation Type",
        patientName: "Patient Name",
        phone: "Phone",
        date: "Date",
        hospitalOrLocation: "Hospital / Donation Location",
        select: "Select",
        submit: "Submit",
        legalNotice: "The entered information is never stored on the server or elsewhere. After filling out the form, the data is only shown on the image and your privacy is protected.",
        redBlood: "Red Blood",
        platelet: "Platelet",
        granulocyte: "Granulocyte",
        plasma: "Plasma",
        stemCell: "Stem Cell",
      },
    },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: { escapeValue: false },
});

export default i18n;