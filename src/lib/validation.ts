// Form Validation Utilities

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (basic)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
};

// Password validation
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

// Consultation Form Validation
export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  intakeSemester: string;
}

export const validateConsultationForm = (
  data: Partial<ConsultationFormData>
): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.firstName?.trim()) {
    errors.push({ field: "firstName", message: "First name is required" });
  }

  if (!data.lastName?.trim()) {
    errors.push({ field: "lastName", message: "Last name is required" });
  }

  if (!data.email?.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Invalid email format" });
  }

  if (!data.phone?.trim()) {
    errors.push({ field: "phone", message: "Phone number is required" });
  } else if (!isValidPhone(data.phone)) {
    errors.push({ field: "phone", message: "Invalid phone format" });
  }

  if (!data.country) {
    errors.push({ field: "country", message: "Please select a country" });
  }

  if (!data.course?.trim()) {
    errors.push({ field: "course", message: "Please select a course" });
  }

  if (!data.intakeSemester) {
    errors.push({ field: "intakeSemester", message: "Please select an intake semester" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Appointment Form Validation
export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  appointmentType: string;
  message: string;
}

export const validateAppointmentForm = (
  data: Partial<AppointmentFormData>
): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.name?.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!data.email?.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Invalid email format" });
  }

  if (!data.phone?.trim()) {
    errors.push({ field: "phone", message: "Phone number is required" });
  } else if (!isValidPhone(data.phone)) {
    errors.push({ field: "phone", message: "Invalid phone format" });
  }

  if (!data.date) {
    errors.push({ field: "date", message: "Please select a date" });
  }

  if (!data.time) {
    errors.push({ field: "time", message: "Please select a time" });
  }

  if (!data.appointmentType) {
    errors.push({ field: "appointmentType", message: "Please select appointment type" });
  }

  if (data.message && data.message.length > 500) {
    errors.push({ field: "message", message: "Message should not exceed 500 characters" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Contact Form Validation
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateContactForm = (
  data: Partial<ContactFormData>
): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.name?.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!data.email?.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Invalid email format" });
  }

  if (!data.subject?.trim()) {
    errors.push({ field: "subject", message: "Subject is required" });
  }

  if (!data.message?.trim()) {
    errors.push({ field: "message", message: "Message is required" });
  } else if (data.message.length < 10) {
    errors.push({ field: "message", message: "Message should be at least 10 characters" });
  } else if (data.message.length > 1000) {
    errors.push({ field: "message", message: "Message should not exceed 1000 characters" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
