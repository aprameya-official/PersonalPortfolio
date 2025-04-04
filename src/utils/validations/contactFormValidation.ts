type Errors = { [x: string]: string[] } | false;

const contactFormValidation = (obj: { [key: string]: any } | null): Errors => {
  const errors: Errors = {};

  for (const key in obj) {
    const value = obj[key];
    switch (key) {
      case "from_email":
        if (!value || value.length <= 0) {
          errors[key] = ["The email field is required."];
        } else {
          // Regular expression for email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            errors[key] = ["The email field must be a valid email address."];
          }
        }
        break;

      case "from_name":
        if (!value || value.length <= 0) {
          errors[key] = ["The name field is required."];
        }
        break;

      case "message":
        if (!value || value.length <= 0) {
          errors[key] = ["The message field is required."];
        }
        break;

      default:
        break;
    }
  }

  return Object.keys(errors).length === 0 ? false : errors;
};

export default contactFormValidation;
