

function RNA(dna_str) {
    let rna_str = dna_str.replaceAll(/./g, n => ({ G: 'C', C: 'G', T: 'A', A: 'U' }[n]));  return rna_str
}

function DNA(rna_str) {
    let dna_str = ''
    const c = {
        C: 'G',
        G: 'C',
        A: 'T',
        U: 'A',
    };

    for (const n of rna_str) {
        dna_str += c[n]
    }

    return dna_str
}



