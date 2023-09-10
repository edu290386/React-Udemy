import { useState } from "react";
import { UserContext } from "./UserContext";

// const user1 = {
//   email: "eduardo_torres@outlook.com",
//   id: 123,
//   name: "Eduardo Torres",
// };


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
