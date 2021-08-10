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

module.exports={
    dummy,
    totalLikes,
    blogWithMostLikes
}