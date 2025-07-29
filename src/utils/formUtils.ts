// Turkish month names
const TURKISH_MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
] as const;

// Phone number constraints
const PHONE_MAX_LENGTH = 11;
const PHONE_FORMAT_POSITIONS = [4, 7, 9] as const;

/**
 * Formats a date string to Turkish format
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date in Turkish (e.g., "15 Mart 2024")
 */
export function formatDateToTurkish(dateString: string): string {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "";
    }

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Ensure month index is valid
    if (monthIndex < 0 || monthIndex >= TURKISH_MONTHS.length) {
      return "";
    }

    return `${day} ${TURKISH_MONTHS[monthIndex]} ${year}`;
  } catch {
    return "";
  }
}

/**
 * Formats a phone number to Turkish format (0XXX XXX XX XX)
 * @param value - Raw phone number input
 * @returns Formatted phone number
 */
export function formatPhoneNumber(value: string): string {
  if (!value) return "";

  // Remove all non-digit characters
  let cleaned = value.replace(/\D/g, "");
  
  // Ensure it starts with 0 if not empty
  if (cleaned.length > 0 && !cleaned.startsWith("0")) {
    cleaned = "0" + cleaned;
  }
  
  // Limit to maximum length
  cleaned = cleaned.substring(0, PHONE_MAX_LENGTH);

  // Apply formatting based on length
  let formatted = cleaned;
  
  if (cleaned.length > PHONE_FORMAT_POSITIONS[0]) {
    formatted = cleaned.substring(0, 4) + " " + cleaned.substring(4);
  }
  
  if (cleaned.length > PHONE_FORMAT_POSITIONS[1]) {
    formatted =
      cleaned.substring(0, 4) +
      " " +
      cleaned.substring(4, 7) +
      " " +
      cleaned.substring(7);
  }
  
  if (cleaned.length > PHONE_FORMAT_POSITIONS[2]) {
    formatted =
      cleaned.substring(0, 4) +
      " " +
      cleaned.substring(4, 7) +
      " " +
      cleaned.substring(7, 9) +
      " " +
      cleaned.substring(9);
  }
  
  return formatted;
}