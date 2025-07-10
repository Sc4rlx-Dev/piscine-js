import fs from 'node:fs'
const arg1 = process.argv[2]

function rev(word) {
    const m = Math.floor(word.length / 2) ; const p1 = word.slice(0, m); const p2 = word.slice(m) 
    return p2 + p1
}

fs.readFile(arg1, 'utf8', (err, data) => { 
    if(err) {  console.log(err) ; return }
    
    const result = data.trim().split(' ')
        .map(word => rev(word))
        .join(' ');
    
    console.log(result); 
})