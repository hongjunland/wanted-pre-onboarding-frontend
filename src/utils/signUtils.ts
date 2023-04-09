import { SignForm } from "../types/SignForm";

export function isEmailFormat(email?: string) {
  if (email?.includes("@")) return true;
  return false;
}

export function isPasswordFormat(password?: string) {
  if (password && password.length >= 8) return true;
  return false;
}

export function isSignFormat(signForm: SignForm) {
  if (isEmailFormat(signForm.email) && isPasswordFormat(signForm.password)) return true;
  return false;
}
