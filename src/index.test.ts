import StrKit from "./index";

test("toCamelCase", ()=>{
  expect(StrKit.toCamelCase("aa_bbb_cccc_ss")).toEqual("aaBbbCcccSs"); 
  expect(StrKit.toCamelCase("aa_bbb_ss")).toEqual("aaBbbSs"); 
  expect(StrKit.toCamelCase("")).toEqual(""); 
  expect(StrKit.toCamelCase("sssssssssss")).toEqual("sssssssssss"); 
  expect(StrKit.toCamelCase("z_sss")).toEqual("zSss"); 
})

test('firstCharToLowerCase',()=>{
  expect(StrKit.firstCharToLowerCase("AAA")).toEqual("aAA"); 
  expect(StrKit.firstCharToLowerCase("www")).not.toEqual("Www"); 
  expect(StrKit.firstCharToLowerCase("")).toEqual(""); 
})

test('firstCharToUpperCase',()=>{
  expect(StrKit.firstCharToUpperCase("aAA")).toEqual("AAA"); 
  expect(StrKit.firstCharToUpperCase("www")).not.toEqual("www"); 
  expect(StrKit.firstCharToUpperCase("")).toEqual(""); 
})

test('isBlank',()=>{
  expect(StrKit.isBlank("aAA")).toEqual(false); 
  expect(StrKit.isBlank("  \t\r")).toEqual(true); 
  expect(StrKit.isBlank(" s \t\r")).toEqual(false); 
  expect(StrKit.isBlank("")).toEqual(true); 
  expect(StrKit.isBlank(null as any)).toEqual(true); 
  expect(StrKit.isBlank(undefined as any)).toEqual(true); 
})

