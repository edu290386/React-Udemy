import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({});

  const onInputChange = (event) => {
    const {name, value} = event.target
    setFormState({...formState, [name]:value})
  };
console.log(formState);
  return (
    <form>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form-control "
        onChange={onInputChange}
        value={formState.username}
      />
      <input
        type="text"
        name="email"
        placeholder="eduardo_torres@outlool.com"
        className="form-control mt-4"
        onChange={onInputChange}
        value={formState.email}
      />
    </form>
  );
};
