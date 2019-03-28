const fs = require('fs');
exports.modules.image=function(){
//reading the file
fs.readFile('Output.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    var content= data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
   
    fs.writeFile('sss.jpg', content, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) ;
});
}