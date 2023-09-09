import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;
  // const [formState, setFormState] = useState({});
  // const { username, password, email } = formState;

  // const onInputChange = ({target}) => {
  //   const {name,value} = target;
  //   setFormState({...formState, [name]:value});
  // };

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
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mt-4"
          onChange={onInputChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mt-4"
          onChange={onInputChange}
          value={password}
        />
      </form>
      <button onClick={onResetForm} className="btn btn-primary mt-4">
        Delete
      </button>
    </div>
  );
};
