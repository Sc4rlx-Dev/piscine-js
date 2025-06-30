import { styles } from "./pimp-my-style.data.js"
var i = 0
let len = styles.length
let flag = true

export const pimp = () => {
    const btn = document.querySelector("button")
    if (!btn) { return }

    if(flag) {
        btn.classList.remove("unpimp")
        btn.classList.add(styles[i])
        i++
        if(i === len) {
            flag = false
        }
    } else {
        btn.classList.remove(styles[i])
        btn.classList.add("unpimp")
        i--

        if(i === 0) {
            btn.classList.remove("unpimp")
            flag = true
        }
    }
}





