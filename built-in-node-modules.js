// const os = require('os');

// // info about the system user
// const user= os.userInfo();
// console.log(user);

// // info about the system run time

// console.log(`The system Uptime in seconds is ${os.uptime()} seconds`);

// const currentOs = {
//     name : os.type(),
//     release : os.release(),
//     totalMemory : os.totalmem(),
//     freeMemory : os.freemem()
// }

// console.log(currentOs);

// // path module in node

// const path = require('path');

// // first property of path is seperator property

// console.log(path.sep);

// const filePath = path.join('/example' , 'subfolder' , 'text.txt');
// console.log(filePath);

// // to exactly target the component in the path 

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname , 'example', 'subfolder', 'text.txt');
// console.log(absolute);

// // synchronous methods of file system

//const {readFileSync, writeFileSync} = require('fs');
// const firstFile = readFileSync('./example/first.txt','utf-8');
// const secondFile = readFileSync('./example/second.txt' , 'utf-8');

// writeFileSync('./example/result-sync.txt' , `Here is the result : ${firstFile} , ${secondFile}`);


// async function 

const {readFile , writeFile} = require('fs');

readFile('./example/first.txt', 'utf8' , ((err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    else {
      result;
    }

    const first = result;
    console.log(first);
     
    readFile('./example/second.txt' , 'utf8' , ((err,result) => {

       if(err) {
        console.log(err);
        return;
    }

    const second = result;
    

    writeFile('./example/result-async.txt', `Hey this is my file. ${first} ${second} ` , 'utf-8' , ((err,result) => {
        if(err) {
        console.log(err);
        return;
    }
    else {
        console.log(result);
    }
    })

    )

}))    
    
  
}))