import  { useState } from "react";
import "./BloodDonationForm.css";

export default function BloodDonationForm() {
  const [formData, setFormData] = useState({
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
          Hasta Adı:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefon Numarası:
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
          Hastane / Bağış Yapılacak Yer:
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

        {/* AD SOYAD */}
        <div className="text-item" style={{ top: "261px", left: "90px" }}>
          {formData.fullName}
        </div>

        {/* TELEFON */}
        <div className="text-item" style={{ top: "315px", left: "75px" }}>
          {formData.phone}
        </div>

        {/* TARİH */}
        <div className="text-item" style={{ top: "371px", left: "60px" }}>
          {formData.date}
        </div>

        {/* HASTANE / YER */}
        <div
          className="text-item multiline"
          style={{ top: "468px", left: "17px", width: "320px" }}
        >
          {formData.hospital}
        </div>

      </div>
    </div>
  );
}
