import { useState } from "react";
import "./BloodDonationForm.css";

export default function BloodDonationForm() {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    bloodType: "",
    fullName: "",
    phone: "",
    date: "",
    hospital: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDateToTurkish = (dateString: string) => {
    if (!dateString) return "";
    
    const months = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="container">
      {/* FORM */}
      <form className="form">
        <label>
          Kan Grubu:
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="A RH (+)">A RH (+)</option>
            <option value="A RH (-)">A RH (-)</option>
            <option value="B RH (+)">B RH (+)</option>
            <option value="B RH (-)">B RH (-)</option>
            <option value="AB RH (+)">AB RH (+)</option>
            <option value="AB RH (-)">AB RH (-)</option>
            <option value="O RH (+)">O RH (+)</option>
            <option value="O RH (-)">O RH (-)</option>
          </select>
        </label>
        <label>
          Kan Türü:
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="Kırmızı Kan">Kırmızı Kan</option>
            <option value="Trombosit">Trombosit</option>
            <option value="Granülosit">Granülosit</option>
            <option value="Plazma">Plazma</option>
            <option value="Kök Hücre">Kök Hücre</option>
          </select>
        </label>
        <label>
          Hasta Adı:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefon:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Tarih:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Hastane Adı / Kan bağışının yapılacağı yerler
          <textarea
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            rows={5}
          />
        </label>
      </form>

      {/* GÖRSEL + YAZILAR */}
      <div className="image-wrapper">
        <img
          src="kan-akademi-ilan-template-1.jpg"
          alt="Template"
          className="background-image"
        />

        {/* KAN GRUBU */}
        <div
          className="text-item blood-group"
          style={{ top: "80px", left: "62px" }}
        >
          {formData.bloodGroup}
        </div>

        {/* KAN TÜRÜ */}
        <div
          className="text-item blood-type"
          style={{ top: "180px", left: "85px" }}
        >
          {formData.bloodType}
        </div>

        {/* AD SOYAD */}
        <div className="text-item" style={{ top: "261px", left: "90px" }}>
          {formData.fullName}
        </div>

        {/* TELEFON */}
        <div className="text-item" style={{ top: "315px", left: "75px" }}>
          {formData.phone}
        </div>

        {/* TARİH */}
        <div className="text-item" style={{ top: "370px", left: "60px" }}>
          {formatDateToTurkish(formData.date)}
        </div>

        {/* HASTANE / YER */}
        <div
          className="text-item multiline"
          style={{ top: "470px", left: "17px", width: "320px" }}
        >
          {formData.hospital}
        </div>
      </div>
    </div>
  );
}
