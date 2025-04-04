const checkErrorFieldKeysInForm = (
  form: { [x: string]: string | number | null | Date },
  errors: { [x: string]: string[] } | null | undefined
) => {
  if (errors) {
    return Object.keys(errors).some((key) => key in form);
  }
  return false;
};

export default checkErrorFieldKeysInForm;
