import { useState } from "react";

export const useForm = (intialValues = {}) => {
  const [formValues, setFormValues] = useState(intialValues);
  const handleInputChange = ({ target: { name, value } }) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  return [formValues, handleInputChange];
};
