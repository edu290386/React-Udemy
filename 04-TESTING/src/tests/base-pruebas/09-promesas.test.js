import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Testing 09-promesas-async", () => {
  test(`getHeroeById must return info`, (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });
  test(`getHeroeById must return error`, (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe')
      done();
    });
  });
});
