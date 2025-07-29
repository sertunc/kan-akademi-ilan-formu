import { useState, useCallback } from "react";
import { formatPhoneNumber } from "../utils/formUtils";
import { DEFAULT_FIELD_POSITIONS } from "../constants/formConstants";
import type { BloodDonationFormEntity, BloodDonationFormData } from "../entities/BloodDonationFormTypes";

export function useBloodDonationForm() {
  const [formData, setFormData] = useState<BloodDonationFormEntity>({
    bloodGroup: { value: "", coord: DEFAULT_FIELD_POSITIONS.bloodGroup },
    bloodType: { value: "", coord: DEFAULT_FIELD_POSITIONS.bloodType },
    fullName: { value: "", coord: DEFAULT_FIELD_POSITIONS.fullName },
    phone: { value: "", coord: DEFAULT_FIELD_POSITIONS.phone },
    date: { value: "", coord: DEFAULT_FIELD_POSITIONS.date },
    hospital: { value: "", coord: DEFAULT_FIELD_POSITIONS.hospital },
  });

  const handleFieldChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: { 
        ...prev[name as keyof BloodDonationFormEntity], 
        value 
      },
    }));
  }, []);

  const handlePhoneChange = useCallback((value: string) => {
    const formattedPhone = formatPhoneNumber(value);
    setFormData((prev) => ({
      ...prev,
      phone: { ...prev.phone, value: formattedPhone },
    }));
  }, []);

  // Extract plain form data without coordinates
  const getFormData = useCallback((): BloodDonationFormData => ({
    bloodGroup: formData.bloodGroup.value,
    bloodType: formData.bloodType.value,
    fullName: formData.fullName.value,
    phone: formData.phone.value,
    date: formData.date.value,
    hospital: formData.hospital.value,
  }), [formData]);

  return {
    formData,
    getFormData,
    handleFieldChange,
    handlePhoneChange,
  };
}