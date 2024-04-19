import { birthHelper } from "../src/helpers/birthday-helper";
import { passwordHelper, emailHelper, nameHelper } from "../src/helpers/string-helper";

test('validar senha', ()=>{
    expect(passwordHelper('1234567')).toBe(true)
})

test('validar email', ()=>{
    expect(emailHelper('email@dominio.com')).toBe(true)
})

test('validar nome meno que 30 caracteres', ()=>{
    expect(nameHelper('aaaadamskkasnkdnkadsnkdsankdaskasdkasd')).toBe(false)
})

test('testa se aniversario é menor que data atual esta no formato correto', ()=>{
    expect(birthHelper('19-08-1970')).toBe(true)
})