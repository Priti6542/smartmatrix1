/**
 * Validates an email address format.
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
}

/**
 * Validates a phone number (allows optional +, spaces, hyphens, and at least 7 digits).
 */
export function isValidPhone(phone) {
  const cleaned = String(phone).replace(/[\s\-()]/g, "");
  return /^(\+)?\d{7,15}$/.test(cleaned);
}

/**
 * Validates Contact form inputs.
 */
export function validateContactForm(formData) {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = "Full name is required.";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!formData.email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  const contactValue = formData.contact || formData.phone;
  if (!contactValue?.trim()) {
    errors.contact = "Contact number is required.";
  } else if (!isValidPhone(contactValue)) {
    errors.contact = "Please enter a valid contact number (at least 7 digits).";
  }

  if (!formData.message?.trim()) {
    errors.message = "Message is required.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates Career application form inputs.
 */
export function validateCareerForm(formData) {
  const errors = {};

  if (!formData.fullName?.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!formData.email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!formData.role?.trim()) {
    errors.role = "Please select a target position.";
  }

  if (!formData.experience?.trim()) {
    errors.experience = "Please specify your experience level.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

