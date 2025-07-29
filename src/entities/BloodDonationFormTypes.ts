import type { CoordinateEntity } from "./CoordinateEntity";

export interface BloodDonationFormData {
  bloodGroup: string;
  bloodType: string;
  fullName: string;
  phone: string;
  date: string;
  hospital: string;
}

export interface FormFieldWithPosition {
  value: string;
  coord: CoordinateEntity;
}

export interface BloodDonationFormEntity {
  bloodGroup: FormFieldWithPosition;
  bloodType: FormFieldWithPosition;
  fullName: FormFieldWithPosition;
  phone: FormFieldWithPosition;
  date: FormFieldWithPosition;
  hospital: FormFieldWithPosition;
}