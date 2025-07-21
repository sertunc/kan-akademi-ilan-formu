export interface BloodDonationRequest {
  bloodGroup: string;         // Kan Grubu (e.g. "A", "B", "AB", "O")
  bloodGroupType: string;    // Kan Grubu Türü (e.g. "(+)", "(-)")
  bloodType: string;          // Kan Türü (e.g. "Kırmızı Kan", "Trombosit", "Plazma", "Kök Hücre")
  patientName: string;        // Hasta Adı
  phone: string;              // Telefon
  date: string;               // Tarih (ISO format recommended)
  hospitalOrLocation: string; // Hastane/ Bağışının Yapılacağı Yerler
}