import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Testing 02-template-string", ()=> {
    test('getSaludo must return "Hola Fernando"', ()=>{
        const name = "Fernando";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});