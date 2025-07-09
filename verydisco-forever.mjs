import { writeFileSync } from 'fs'

const input = process.argv[2]

function Disco(word) {
    const m = Math.ceil(word.length / 2)
    const f = word.slice(0 , m)
    const s = word.slice(m)
    return s + f
}

if (!input) { console.log("🕺🏼") ; process.exit(1) }
const words = input.split(" ")
const result = words.map(Disco).join(" ")

console.log(result)

writeFileSync('verydisco-forever.txt', result + '\n')