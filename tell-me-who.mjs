import fs from 'node:fs/promises'

const dir = process.argv[2] 
    fs.readdir(dir)
    .then(files => files.sort((a, b) => a.localeCompare(b)))
    .then(sort => sort.forEach((name, i) => 
    console.log(`${i+1}. ${name.replace(/\.\w+$/, '').replace(/_/g, ' ')}`)
))