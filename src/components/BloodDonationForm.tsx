import { useRef, useState } from "react";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import { useTranslation } from "react-i18next";
import "./BloodDonationForm.css";
import { formatDateToTurkish, formatPhoneNumber } from "../utils/formUtils";
import type { BloodDonationFormEntity } from "../entities/BloodDonationFormEntity";

const BLOOD_GROUP_LEFT_AB = 20;
const BLOOD_GROUP_LEFT_DEFAULT = 47;

const defaultCoords = {
  bloodGroup: { top: 83, left: BLOOD_GROUP_LEFT_DEFAULT },
  bloodType: { top: 212, left: 135 },
  fullName: { top: 256, left: 80 },
  phone: { top: 302, left: 65 },
  date: { top: 347, left: 50 },
  hospital: { top: 408, left: 10 },
  location: { top: 475, left: 10 },
};

export default function BloodDonationForm() {
  const { t } = useTranslation();
  const imageRef = useRef(null);

  const [formData, setFormData] = useState<BloodDonationFormEntity>({
    bloodGroup: { value: "", coord: defaultCoords.bloodGroup },
    bloodType: { value: "", coord: defaultCoords.bloodType },
    fullName: { value: "", coord: defaultCoords.fullName },
    phone: { value: "", coord: defaultCoords.phone },
    date: { value: "", coord: defaultCoords.date },
    hospital: { value: "", coord: defaultCoords.hospital },
    location: { value: "", coord: defaultCoords.location },
  });

  function getBloodGroupLeft(value: string) {
    return value.startsWith("AB") ? BLOOD_GROUP_LEFT_AB : BLOOD_GROUP_LEFT_DEFAULT;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "bloodGroup") {
      setFormData((prev) => ({
        ...prev,
        bloodGroup: {
          value,
          coord: {
            ...prev.bloodGroup.coord,
            left: getBloodGroupLeft(value),
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: { ...prev[name as keyof BloodDonationFormEntity], value },
      }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({
      ...prev,
      phone: { ...prev.phone, value: formatted },
    }));
  };

  const downloadImage = () => {
    if (!imageRef.current) return;

    const allFieldsFilled = Object.values(formData).every(
      (field) => field.value.trim() !== ""
    );

    if (!allFieldsFilled) {
      Swal.fire({
        icon: "error",
        confirmButtonText: t("close"),
        text: t("fillAllFields"),
      });
      return;
    }

    html2canvas(imageRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "kan-bagis-ilani-formu.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
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
            <option value="0 RH (+)">0 RH (+)</option>
            <option value="0 RH (-)">0 RH (-)</option>
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
            autoComplete="off"
            value={formData.fullName.value}
            onChange={handleChange}
          />
        </label>
        <label>
          {t("phone")}:
          <input
            type="text"
            name="phone"
            autoComplete="off"
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
          {t("hospitalName")}:
          <textarea
            name="hospital"
            value={formData.hospital.value}
            onChange={handleChange}
            rows={2}
          />
        </label>
        <label>
          {t("location")}:
          <textarea
            name="location"
            value={formData.location.value}
            onChange={handleChange}
            rows={5}
          />
        </label>
      </form>

      {/* İNDİRME BUTONU */}
      <button className="download-button" onClick={downloadImage}>
        Görseli İndir
      </button>

      {/* GÖRSEL + YAZILAR */}
      <div className="image-wrapper" ref={imageRef}>
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
          className="text-item"
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

        {/* HASTANE */}
        <div
          className="text-item multiline"
          style={{
            top: `${formData.hospital.coord.top}px`,
            left: `${formData.hospital.coord.left}px`,
            width: "305px",
          }}
        >
          {formData.hospital.value}
        </div>

        {/* YER */}
        <div
          className="text-item multiline"
          style={{
            top: `${formData.location.coord.top}px`,
            left: `${formData.location.coord.left}px`,
            width: "340px",
          }}
        >
          {formData.location.value}
        </div>
      </div>
    </div>
  );
}
