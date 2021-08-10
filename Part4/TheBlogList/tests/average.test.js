const averageFunction=require("../utils/testPractice.js").average;

describe("average function testing: ",()=>{

    test("checking average of an array of length 5",()=>{
        expect(averageFunction([1,2,3,4,5])).toBe(3);
    })
    
    test("checking average of an array of length 0",()=>{
        expect(averageFunction([])).toBe(0);
    })

})