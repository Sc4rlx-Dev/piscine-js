const countPronouns = (str) => {
    const res = {}
    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"])
    const words = str.match(/\b\w+\b/g) || []

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i].toLowerCase()

        if (pronouns.has(currentWord)) {
            if (!res[currentWord]) {
                res[currentWord] = { words: [], count: 0 }
            }
            res[currentWord].count++

            const nextWord = words[i + 1]
            if (nextWord && !pronouns.has(nextWord.toLowerCase())) {
                res[currentWord].words.push(nextWord)
            }
        }
    }

    return res
}


const ex = 'Using Array Destructuring, you you can iterate through objects easily.'
console.log(
countPronouns(ex)
)
// { you: { word: [ 'can' ], count: 2 } }
// const ex = 'If he you want to buy something you have to pay.'

// {
//   he: { word: [], count: 1}
//   you: { word: [ 'want', 'have' ], count: 2 }
// }