export class RegexUtil {
  static readonly EMAIL: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  static readonly PHONE: RegExp = /^[6-9]\d{9}$/;
  static readonly POSTAL_CODE: RegExp = /^[1-9][0-9]{5}$/;
  static readonly PASSWORD: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  static readonly URL: RegExp = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.]*)*\/?$/;
  static readonly CARD_NUMBER:RegExp = /^\d{16}$/;
  static readonly EXPIRY_DATE:RegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
  static readonly CVV:RegExp = /^\d{3}$/;
}
