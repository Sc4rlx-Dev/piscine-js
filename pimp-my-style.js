import { styles } from "./pimp-my-style.data.js"

let i = 0
let flag = true

export const pimp = () => {
    const btn = document.querySelector("button")
    if (!btn) return

    if (flag) {
        btn.classList.remove("unpimp")
        btn.classList.add(styles[i])
        i++
        if (i === styles.length) {
            flag = false
            btn.classList.add("unpimp")
        }
    } else {
        i--
        btn.classList.remove(styles[i])
        if (i === 0) {
            flag = true
            btn.classList.remove("unpimp")
        }
    }
}