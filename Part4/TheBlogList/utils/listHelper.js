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

const authorWithMostBlogs=(blogList)=>{

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

module.exports={
    dummy,
    totalLikes,
    blogWithMostLikes,
    authorWithMostBlogs
}