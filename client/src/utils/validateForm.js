export const validateProfile = ({ name }) => {
  const errors = {};
  if (!name) errors.name = 'Enter your name';
  return errors;
}