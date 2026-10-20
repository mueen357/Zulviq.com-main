export interface BankAccount {
  bankName: string;
  accountTitle: string;
  accountNumber: string;
  accountNumberRaw: string;
  iban?: string;
  ibanRaw?: string;
  raastNumber?: string;
  raastNumberRaw?: string;
  subtitle?: string;
}

export const officialBankDetails: BankAccount = {
  bankName: "United Bank Limited (UBL)",
  accountTitle: "Muhammad Kaif",
  accountNumber: "0240316532325",
  accountNumberRaw: "0240316532325",
  subtitle: "Please transfer the exact order amount and upload the payment screenshot / transaction receipt below.",
};
