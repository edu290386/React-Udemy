import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from "../../data/heroes"
describe("Testing 08-imp-exp", () => {
  test(`getHeroeById must return info`, () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test(`getHeroeById must return info`, () => {
    const id = 100;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });
  test("getHeroesByOwner must return info", () => {
    const name = "DC";
    const heroesCompany = getHeroesByOwner(name);
    expect(heroesCompany.length).toBe(3);
    expect(heroesCompany).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroesCompany).toEqual(heroes.filter((heroe)=> heroe.owner === name))

  });
  test("getHeroesByOwner must return info", () => {
    const name = "DC";
    const heroesCompany = getHeroesByOwner(name);
    expect(heroesCompany).toEqual(heroes.filter((heroe)=> heroe.owner === name))
  });
});
