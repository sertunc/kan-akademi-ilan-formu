import type { CoordinateEntity } from "../entities/CoordinateEntity";

// Default positions for text overlay on the template image
export const DEFAULT_FIELD_POSITIONS: Record<string, CoordinateEntity> = {
  bloodGroup: { top: 80, left: 62 },
  bloodType: { top: 180, left: 85 },
  fullName: { top: 261, left: 90 },
  phone: { top: 315, left: 75 },
  date: { top: 370, left: 60 },
  hospital: { top: 470, left: 17 },
};

// Blood group options
export const BLOOD_GROUPS = [
  "A RH (+)",
  "A RH (-)",
  "B RH (+)",
  "B RH (-)",
  "AB RH (+)",
  "AB RH (-)",
  "O RH (+)",
  "O RH (-)",
] as const;

// Blood type options with translation keys
export const BLOOD_TYPES = [
  { value: "Kırmızı Kan", translationKey: "redBlood" },
  { value: "Trombosit", translationKey: "platelet" },
  { value: "Granülosit", translationKey: "granulocyte" },
  { value: "Plazma", translationKey: "plasma" },
  { value: "Kök Hücre", translationKey: "stemCell" },
] as const;

// Template image filename
export const TEMPLATE_IMAGE = "kan-akademi-ilan-template-1.jpg";