const testFunctions=require("../utils/listHelper.js");

//data used in tests.
const blogList = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

  //actual tests begin here.
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

describe("Testing functions that find Highest properties of blogs in blogList:",()=>{

    test("checking if the most liked blog function works: ",()=>{
        
        const result=(testFunctions.blogWithMostLikes(blogList));
        //console.log(result);
         expect(result).toEqual(blogList[2]);

    })

    test("checking if the function to find author with most blogs works:",()=>{

        const result= testFunctions.mostBlogs (blogList);
         
        const correctResult = {
            author:"Robert C. Martin",
            blogs:3
        }
        expect(result).toEqual(correctResult);
    })

    test("checking if the function to find mostLiked author works:",()=>{

        const result=testFunctions.mostLikes(blogList);

        const correctResult={
            author:"Edsger W. Dijkstra",
            totalLikes:17
        }

        console.log(result);

        expect(result).toEqual(correctResult);
    })
})