import  { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {/* FORM */}
      <form className="form">
        <label>
          Kan Grubu:
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Örn: A+, O−"
          />
        </label>
        <label>
          Kan Türü:
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            placeholder="Örn: Tam Kan, Trombosit"
          />
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
        <img src="kan-akademi-ilan-template.jpeg" alt="Template" className="background-image" />

        {/* KAN GRUBU */}
        <div className="text-item blood-group" style={{ top: "80px", left: "62px" }}>
          {formData.bloodGroup}
        </div>

        {/* KAN TÜRÜ */}
        <div className="text-item blood-type" style={{ top: "180px", left: "85px" }}>
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
          {formData.date}
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
