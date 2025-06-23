

function letterSpaceNumber(str) {
    
    const rx = /\D\s\d\b/g  
    const matches = [];
    let match;

    while ((match = rx.exec(str)) !== null) {
        matches.push(match[0])
    }
    return matches;
}


// const str = 'He is 8 or 9 years old, not 10'

// console.log(letterSpaceNumber(str));


