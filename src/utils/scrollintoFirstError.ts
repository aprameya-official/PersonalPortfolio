const scrollintoFirstError = (
  errors: { [x: string]: string[] },
  marginTop = 128
) => {
  const firstError = Object.keys(errors).find((key) => errors[key]?.length > 0);
  const element = firstError && document.getElementById(firstError);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    if (marginTop > 0) {
      // Adjust scroll position to account for the margin top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - marginTop;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }
};

export default scrollintoFirstError;
