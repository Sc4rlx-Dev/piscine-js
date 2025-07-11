import { writeFileSync } from 'fs'

const input = process.argv[2]

function Disco(word) {
    const m = Math.ceil(word.length / 2)
    const f = word.slice(0, m)
    const s = word.slice(m)
    return s + f
}

if (!input) { writeFileSync('verydisco-forever.txt', '🕺🏼') ; process.exit(1) }

const words = input.split(" ")
const result = words.map(Disco).join(" ")

writeFileSync('verydisco-forever.txt', result)