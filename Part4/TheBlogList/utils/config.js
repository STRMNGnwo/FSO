require("dotenv").config();//this would move all varianbles defined in .env into process.env.

const MONGODBURL=process.env.MONGODBURL;

console.log(MONGODBURL);

const credentials={
    MONGODBURL
}

module.exports=credentials;