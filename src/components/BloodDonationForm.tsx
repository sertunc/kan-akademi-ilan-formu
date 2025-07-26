import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./BloodDonationForm.css";
import { formatDateToTurkish, formatPhoneNumber } from "../utils/formUtils";
import type { BloodDonationFormEntity } from "../entities/BloodDonationFormEntity";

const defaultCoords = {
  bloodGroup: { top: 80, left: 62 },
  bloodType: { top: 180, left: 85 },
  fullName: { top: 261, left: 90 },
  phone: { top: 315, left: 75 },
  date: { top: 370, left: 60 },
  hospital: { top: 470, left: 17 },
};

export default function BloodDonationForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<BloodDonationFormEntity>({
    bloodGroup: { value: "", coord: defaultCoords.bloodGroup },
    bloodType: { value: "", coord: defaultCoords.bloodType },
    fullName: { value: "", coord: defaultCoords.fullName },
    phone: { value: "", coord: defaultCoords.phone },
    date: { value: "", coord: defaultCoords.date },
    hospital: { value: "", coord: defaultCoords.hospital },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name as keyof BloodDonationFormEntity], value },
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({
      ...prev,
      phone: { ...prev.phone, value: formatted },
    }));
  };

  return (
    <div className="container">
      {/* FORM */}
      <form className="form">
        <label>
          {t("bloodGroup")}:
          <select
            name="bloodGroup"
            value={formData.bloodGroup.value}
            onChange={handleChange}
          >
            <option value="">{t("select")}</option>
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
          {t("bloodType")}:
          <select
            name="bloodType"
            value={formData.bloodType.value}
            onChange={handleChange}
          >
            <option value="">{t("select")}</option>
            <option value="Kırmızı Kan">{t("redBlood")}</option>
            <option value="Trombosit">{t("platelet")}</option>
            <option value="Granülosit">{t("granulocyte")}</option>
            <option value="Plazma">{t("plasma")}</option>
            <option value="Kök Hücre">{t("stemCell")}</option>
          </select>
        </label>
        <label>
          {t("patientName")}:
          <input
            type="text"
            name="fullName"
            value={formData.fullName.value}
            onChange={handleChange}
          />
        </label>
        <label>
          {t("phone")}:
          <input
            type="text"
            name="phone"
            value={formData.phone.value}
            onChange={handlePhoneChange}
            placeholder="0XXX XXX XX XX"
            maxLength={14}
          />
        </label>
        <label>
          {t("date")}:
          <input
            type="date"
            name="date"
            value={formData.date.value}
            onChange={handleChange}
          />
        </label>
        <label>
          {t("hospitalOrLocation")}:
          <textarea
            name="hospital"
            value={formData.hospital.value}
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
          style={{
            top: `${formData.bloodGroup.coord.top}px`,
            left: `${formData.bloodGroup.coord.left}px`,
          }}
        >
          {formData.bloodGroup.value}
        </div>

        {/* KAN TÜRÜ */}
        <div
          className="text-item blood-type"
          style={{
            top: `${formData.bloodType.coord.top}px`,
            left: `${formData.bloodType.coord.left}px`,
          }}
        >
          {formData.bloodType.value}
        </div>

        {/* AD SOYAD */}
        <div
          className="text-item"
          style={{
            top: `${formData.fullName.coord.top}px`,
            left: `${formData.fullName.coord.left}px`,
          }}
        >
          {formData.fullName.value}
        </div>

        {/* TELEFON */}
        <div
          className="text-item"
          style={{
            top: `${formData.phone.coord.top}px`,
            left: `${formData.phone.coord.left}px`,
          }}
        >
          {formData.phone.value}
        </div>

        {/* TARİH */}
        <div
          className="text-item"
          style={{
            top: `${formData.date.coord.top}px`,
            left: `${formData.date.coord.left}px`,
          }}
        >
          {formatDateToTurkish(formData.date.value)}
        </div>

        {/* HASTANE / YER */}
        <div
          className="text-item multiline"
          style={{
            top: `${formData.hospital.coord.top}px`,
            left: `${formData.hospital.coord.left}px`,
            width: "320px",
          }}
        >
          {formData.hospital.value}
        </div>
      </div>
    </div>
  );
}
