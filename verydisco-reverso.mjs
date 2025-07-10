import fs from 'node:fs'
const arg1 = process.argv[2]

function rev(p) {
    const words = p.split(' ')
    const revwd = words
    .map(w => w.split('').reverse().join(''))
    .reverse()
return revwd.join(' ')
}

fs.readFile(arg1, 'utf8' ,(err ,data) => { if(err) { console.log(err) ; return }
// console.log(data)
const res = rev(data)
console.log(res) 
})
