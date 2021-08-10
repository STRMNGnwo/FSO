const testPracticeFunctions=require("../utils/testPractice.js");

describe("palindrome testing",()=>{

    test("check if palindrome of a is a",()=>{

        const result=testPracticeFunctions.palindrome("a");
    
        expect(result).toBe('a');
    })
    
    test("check if palindrome of react is tcaer",()=>{
    
        const result=testPracticeFunctions.palindrome("react");
    
        expect(result).toBe("tcaer");
    })

})
