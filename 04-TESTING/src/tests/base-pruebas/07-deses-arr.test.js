import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Testing 07-deses-arr", () => {
  test(`retornaArreglo must return info`, () => {
    
    const [ letters, numbers] = retornaArreglo();
    expect(letters).toBe('ABC')
    expect(numbers).toBe(123)
    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
    expect(letters).toStrictEqual(expect.any(String))
  });
});
