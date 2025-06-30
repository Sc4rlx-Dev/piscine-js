
export const generateLetters = () => {
    let i = 0
    const buf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const len = buf.length

     while(i < 120){

        const nwdiv = document.createElement("div")
        document.body.append(nwdiv)
        nwdiv.append(buf.charAt(Math.floor(Math.random() * len)))
        nwdiv.style.fontSize = "130px"
        if(i <= 40) { nwdiv.style.fontWeight = 300} else if( i <= 80) { nwdiv.style.fontWeight = 400 } else { nwdiv.style.fontWeight = 600 }
        i++
     }
}