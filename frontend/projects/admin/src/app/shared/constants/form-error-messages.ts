/*
* This file contains the error messages for form validation.
* It exports a constant object that maps validation error types to user-friendly messages.
*/
export const FORM_ERROR_MESSAGES: Record<string, (field: string, error?: any) => string> = {
    required: (field) => `${field} is required`,
    maxlength: (field, error) => `${field} must be at most ${error.requiredLength} characters`,
    minlength: (field, error) => `${field} must be at least ${error.requiredLength} characters`,
    email: (field) => `Please enter a valid email address`,
};