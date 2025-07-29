import { useTranslation } from "react-i18next";
import { BLOOD_GROUPS, BLOOD_TYPES } from "../constants/formConstants";
import type { BloodDonationFormData } from "../entities/BloodDonationFormTypes";

interface FormInputsProps {
  formData: BloodDonationFormData;
  onFieldChange: (name: string, value: string) => void;
  onPhoneChange: (value: string) => void;
}

export default function FormInputs({ formData, onFieldChange, onPhoneChange }: FormInputsProps) {
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFieldChange(name, value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPhoneChange(e.target.value);
  };

  return (
    <form className="form">
      <label>
        {t("bloodGroup")}:
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        >
          <option value="">{t("select")}</option>
          {BLOOD_GROUPS.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </label>

      <label>
        {t("bloodType")}:
        <select
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        >
          <option value="">{t("select")}</option>
          {BLOOD_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {t(type.translationKey)}
            </option>
          ))}
        </select>
      </label>

      <label>
        {t("patientName")}:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

      <label>
        {t("phone")}:
        <input
          type="text"
          name="phone"
          value={formData.phone}
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
          value={formData.date}
          onChange={handleChange}
        />
      </label>

      <label>
        {t("hospitalOrLocation")}:
        <textarea
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          rows={5}
        />
      </label>
    </form>
  );
}