import  passwordHelper  from "../src/helpers/string-helper";

test('testa senha', ()=>{
    expect(passwordHelper('12345')).toBe(true)
})