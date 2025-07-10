import fs from 'node:fs'
const arg1 = process.argv[2]

function rev(p) { 
    const m = Math.floor(p.length / 2)  
    const p1 = p.slice(0 , m) 
    const p2 = p.slice(m) 
    return p2 + p1
}

fs.readFile(arg1, 'utf8' ,(err ,data) => { if(err) { console.log(err) ; return }
// console.log(data)
const res = rev(data)
console.log(res) 
})
