const dummy=(blogs)=>{

    console.log(blogs); //should be a list of blogs;

    return 1;
}

const totalLikes=(blogList)=>{

    console.log("Number of blogs: ",blogList.length);
     
    if(blogList.length==1) return blogList.likes;
    
    var likes=0;
   for(var i=0;i<blogList.length;i++)
   {
     likes+=blogList[i].likes;
   }
     
    return likes;
}

const blogWithMostLikes=(blogList)=>{

    console.log("Number of blogs: ",blogList.length);

    if(blogList.length==1) return blogList;

    var highestLikesBlog=blogList[0];

    for(var i=1;i<blogList.length;i++)
    {
        if(blogList[i].likes>=highestLikesBlog.likes)
        {
            highestLikesBlog=blogList[i];
        }
    }

    return highestLikesBlog;
}

const mostBlogs=(blogList)=>{

    //blogList is an array of blog objects. Each blog object should have a author property.
    
    var authorNames=[] //string array to hold names of encountered authors.

    var authors=[];//array to hold author objects, each object has two fields:name and blogs.

    //iterate through the blogList and add unique author names to the authors array. If author is in the list already, then increment the totalBlogs of that author;

     for(var i=0;i<blogList.length;i++)//looping through the blogList
     {
       if(! authorNames.includes(blogList[i].author)) 
       {
           var newAuthor={
            author:blogList[i].author,
            blogs:1
           }
          authors=authors.concat(newAuthor);
           authorNames=authorNames.concat(blogList[i].author);
       }

       else {
           var indexToUpdate=authorNames.indexOf(blogList[i].author)
            authors[indexToUpdate].blogs++;  
       }
     }

     console.log(authors);

     var authorWithHighestBlogs=authors[0];

     for(var i=0;i<authors.length;i++)
     {
         if(authors[i].blogs>=authorWithHighestBlogs.blogs)
         {
             authorWithHighestBlogs=authors[i];
         }
     }

    return authorWithHighestBlogs;

}

const mostLikes=(blogList)=>{

    //The function returns the author, whose blog posts have the largest amount of likes. The return value also contains the total number of likes that the author has received:

    var authorNames=[];

    var authors=[]; //array to store author objects that have two properties- author and totalLikes.
    
    var mostLikedAuthor;
    var numberOfAuthors=0;
    for(var i=0;i<blogList.length;i++)
    {
        if(!authorNames.includes(blogList[i].author))
        {
            authorNames=authorNames.concat(blogList[i].author);
            var newAuthor={
                author:blogList[i].author,
                totalLikes:blogList[i].likes
            };
            authors=authors.concat(newAuthor);
            numberOfAuthors++; //keeping track of the number of authors.
            if(i==0) 
            {
                mostLikedAuthor=authors[0];
            }
            //console.log(authors[numberOfAuthors-1]);

             //handling edge case, where an author may have a wildly popular blog initially, so to check if his initial blog is more popular than the current most popular blog.
             //I use numberOfAuthors as index as if an author appears multiple times in the blogList, authors would be smaller than blogList
            if(authors[numberOfAuthors-1].totalLikes>=mostLikedAuthor.totalLikes) mostLikedAuthor=authors[i];

        }

        else{
            //authorNames and authors should have the same positions, as both of them have no duplicates and are in the same order.
            var indexToFind=authorNames.indexOf(blogList[i].author);
            authors[indexToFind].totalLikes+=blogList[i].likes;

            if(authors[indexToFind].totalLikes>=mostLikedAuthor.totalLikes)
            {
               mostLikedAuthor=authors[indexToFind];
            }
        }
    }

    //console.log(authors);
    console.log("Most liked author is: ",mostLikedAuthor);

    return mostLikedAuthor;
}

module.exports={
    dummy,
    totalLikes,
    blogWithMostLikes,
    mostBlogs,
    mostLikes
}