import fs from 'node:fs'
const arg1 = process.argv[2]
fs.readFile(arg1, 'utf8' ,(err ,data) => { if(err) { console.log(err) ; return  }; console.log(data) })
