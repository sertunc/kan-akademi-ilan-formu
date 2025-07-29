import { formatDateToTurkish } from "../utils/formUtils";
import { TEMPLATE_IMAGE } from "../constants/formConstants";
import type { BloodDonationFormEntity } from "../entities/BloodDonationFormTypes";

interface TemplateOverlayProps {
  formData: BloodDonationFormEntity;
}

export default function TemplateOverlay({ formData }: TemplateOverlayProps) {
  return (
    <div className="image-wrapper">
      <img
        src={TEMPLATE_IMAGE}
        alt="Template"
        className="background-image"
      />

      {/* Blood Group */}
      <div
        className="text-item blood-group"
        style={{
          top: `${formData.bloodGroup.coord.top}px`,
          left: `${formData.bloodGroup.coord.left}px`,
        }}
      >
        {formData.bloodGroup.value}
      </div>

      {/* Blood Type */}
      <div
        className="text-item blood-type"
        style={{
          top: `${formData.bloodType.coord.top}px`,
          left: `${formData.bloodType.coord.left}px`,
        }}
      >
        {formData.bloodType.value}
      </div>

      {/* Full Name */}
      <div
        className="text-item"
        style={{
          top: `${formData.fullName.coord.top}px`,
          left: `${formData.fullName.coord.left}px`,
        }}
      >
        {formData.fullName.value}
      </div>

      {/* Phone */}
      <div
        className="text-item"
        style={{
          top: `${formData.phone.coord.top}px`,
          left: `${formData.phone.coord.left}px`,
        }}
      >
        {formData.phone.value}
      </div>

      {/* Date */}
      <div
        className="text-item"
        style={{
          top: `${formData.date.coord.top}px`,
          left: `${formData.date.coord.left}px`,
        }}
      >
        {formatDateToTurkish(formData.date.value)}
      </div>

      {/* Hospital / Location */}
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
  );
}