const fs= require('fs');
const data ="This is newest data";
fs.writeFile("./dara.txt",data,(err)=>{
    if (err)
        console.error("Error writing file",err);
    else
        console.log("File written successfuly");
});