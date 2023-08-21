import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Testing 05-funciones", () => {
  test(`getUser must return object`, () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const user = getUser();
    expect(user).toEqual(testUser);
  });
  test(`getUsuarioActivo must return object`, () => {
    const name="Fernando";
    const test = {
        uid: 'ABC567',
        username: name
    }
    const userActive = getUsuarioActivo(name);
    expect(userActive).toEqual(test)
  });
});
