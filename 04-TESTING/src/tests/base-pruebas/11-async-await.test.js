import { getImagen } from "../../base-pruebas/11-async-await";
describe("Testing 11-async-await.js", () => {
  test(`getImagen must return info`, async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
