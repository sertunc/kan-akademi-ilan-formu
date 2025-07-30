import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      translation: {
        greeting: "Geçmiş olsun dileklerimizi iletiyoruz. Umarız en kısa sürede uygun kan bulunur ve sağlığınıza kavuşursunuz. Yanınızdayız!",
        close: "Kapat",
        headerTitle: "Kan İlanı Oluşturma Asistanı",
        headerDesc: "Kan bağışı ihtiyacı bulunan hasta adına, doğru ve eksiksiz bilgileri girerek “Kan İlan Formu”nu doldurunuz. Formu tamamladıktan sonra “Son Adım” butonuna tıklayarak oluşturulan görseli bizimle ve çevrenizle paylaşabilirsiniz. Geçmiş olsun...",
        formTitle: "Kan Bağışı İlanı",
        bloodGroup: "Kan Grubu",
        bloodGroupType: "Kan Grubu Türü",
        bloodType: "Kan Türü",
        donationType: "Bağış Türü",
        patientName: "Hasta Adı",
        phone: "Telefon",
        date: "Tarih",
        hospitalName: "Hastane Adı",
        location: "Kan bağışının yapılabileceği merkezler",
        select: "Seçiniz",
        submit: "Gönder",
        legalNotice: "Tarafınızca girilen kişisel veriler, herhangi bir fiziki veya dijital ortamda kaydedilmez, depolanmaz ya da üçüncü kişilerle paylaşılmaz. Bu veriler yalnızca “Kan İlanı Formu” üzerinde anlık olarak görüntülenir ve görüntüleme sonrasında tamamen ortadan kaldırılır.",
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
        headerTitle: "Blood Ad Creation Assistant",
        headerDesc: "Please fill out the “Blood Donation” Request Form with accurate and complete information on behalf of the patient in need of blood donation. After completing the form, click the “Final Step” button to generate an image that you can share with us and your network. Get well soon...",
        formTitle: "Blood Donation Announcement",
        bloodGroup: "Blood Group",
        bloodGroupType: "Blood Group Type",
        bloodType: "Blood Type",
        donationType: "Donation Type",
        patientName: "Patient Name",
        phone: "Phone",
        date: "Date",
        hospitalName: "Hospital Name",
        location: "Centers where blood donation can be made",
        select: "Select",
        submit: "Submit",
        legalNotice: "The personal data you enter is not recorded, stored, or shared with third parties in any physical or digital environment. This data is only displayed momentarily on the “Blood Announcement Form” and is completely removed after viewing.",
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