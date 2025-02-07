const fs = require('fs');
const data=" i am append to last";

fs.appendFile("./data.txt",data,(err)=>{
    if(err) throw err;
       
    console.log('data appended to file!');
});