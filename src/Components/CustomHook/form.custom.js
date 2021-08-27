import { useState } from "react";

export const useForm = (initailValue) => {
  const [values, setValues] = useState(initailValue);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
