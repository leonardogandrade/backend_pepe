import { passwordHelper, emailHelper } from "../src/helpers/string-helper";

test('validar senha', ()=>{
    expect(passwordHelper('1234567')).toBe(true)
})

test('validar email', ()=>{
    expect(emailHelper('email@dominio.com')).toBe(true)
})


