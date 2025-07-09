const input = process.argv.slice(2).join(" ")

function Disco(word) {
    const m = Math.ceil(word.length / 2)
    const f = word.slice(0, m)
    const s = word.slice(m)
    return s + f
}

if (!input) { console.log("🕺🏼") ; process.exit(1) }

const words = input.split(" ")
const result = words.map(Disco).join(" ")
console.log(result)

if (input.toLowerCase() === "discovery") { console.log("🕺🏼") }
