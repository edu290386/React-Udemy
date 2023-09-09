import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({});
  const { username, email } = formState;
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  console.log(formState);
  return (
    <div>
      <form>
        <h1>Formulario</h1>
        <hr />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="form-control "
          onChange={onInputChange}
          value={username}
        />
        <input
          type="text"
          name="email"
          placeholder="eduardo_torres@outlool.com"
          className="form-control mt-4"
          onChange={onInputChange}
          value={email}
        />
      </form>
      {username == "dustin" && <Message />}
    </div>
  );
};
