const testFunctions=require("../utils/listHelper.js");

const blogList = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
        _id: '5a422aa713252676434d17g6',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 15,
        __v: 0
      }
  ]

describe("testing the bloglist with a dummy function",()=>{

    test("Checking if the dummy function returns 1:",()=>{

        expect(testFunctions.dummy()).toBe(1);
    })
})

describe("testing the totalLikes function ",()=>{

    test("checking if totalLikes for 1 blog returns the likes for that blog only ",()=>{

        const listWithOneBlog = [
            {
              _id: '5a422aa71b54a676234d17f8',
              title: 'Go To Statement Considered Harmful',
              author: 'Edsger W. Dijkstra',
              url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
              likes: 5,
              __v: 0
            }
          ]

          expect(testFunctions.totalLikes(listWithOneBlog)).toBe(listWithOneBlog.likes);


    })

    test("Checking if totalLikes works for multiple blogs",()=>{

       

          expect(testFunctions.totalLikes(blogList)).toBe(20);

    })

})

describe("Testing if the function to find most liked blog works:",()=>{

    test("checking if the most liked blog function works: ",()=>{
        
        const result=(testFunctions.blogWithMostLikes(blogList));
        console.log(result);
         expect(result).toEqual(blogList[1]);

    })
})