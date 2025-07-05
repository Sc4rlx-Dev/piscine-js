const countPronouns = (str) => {
    const res = {}
    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"])
    const words = str.match(/\b\w+\b/g) || []

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i]

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



// Test the countPronouns function
const testString = "I saw you and he said she likes it. They went to the park, and we enjoyed the day."
console.log(countPronouns(testString))