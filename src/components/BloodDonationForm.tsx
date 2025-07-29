import "./BloodDonationForm.css";
import { useBloodDonationForm } from "../hooks/useBloodDonationForm";
import FormInputs from "./FormInputs";
import TemplateOverlay from "./TemplateOverlay";

export default function BloodDonationForm() {
  const { formData, getFormData, handleFieldChange, handlePhoneChange } = useBloodDonationForm();

  return (
    <div className="container">
      <FormInputs
        formData={getFormData()}
        onFieldChange={handleFieldChange}
        onPhoneChange={handlePhoneChange}
      />
      <TemplateOverlay formData={formData} />
    </div>
  );
}
