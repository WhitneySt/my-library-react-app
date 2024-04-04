import { useState } from "react";

const useForm = (initialValue = {}) => {

  const [form, setForm] = useState(initialValue);

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });

  const reset = () => setForm(initialValue);

  return [form, handleChange, reset];
};

export default useForm;
