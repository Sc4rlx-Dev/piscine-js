export const getArchitects = () => {
    const n = Array.from(document.getElementsByTagName('a'))
    const t = Array.from(document.getElementsByTagName('span'))
    return [n, t]
}

export const getClassical = () => {
    const c = Array.from(document.querySelectorAll('a.classical'))
    const nc = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [c, nc]
}

export const getActive = () => {
    const a = Array.from(document.querySelectorAll('a.classical.active'))
    const na = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    return [a, na]
}

export const getBonannoPisano = () => {
    const bp = document.getElementById('BonannoPisano')
    const final = Array.from(document.querySelectorAll('a.classical.active'))
return[bp , final]
}
