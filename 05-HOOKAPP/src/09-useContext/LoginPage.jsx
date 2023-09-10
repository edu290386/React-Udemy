import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const {user,setUser} = useContext(UserContext);

  const setNewUser = () => {
    setUser({email:"edu290386@gmail.com", id:789, name: "Sasha"})
  }

  return (
    <>
      <h1>LoginPage</h1>
      <pre>{JSON.stringify(user)}</pre>
      <button onClick={setNewUser} className="btn btn-primary">Set User</button>
    </>
  );
};
