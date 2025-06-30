export const build = (n) => {
    let id = 1
    const int = setInterval(() => {
        if (id > n) {
            clearInterval(int)
            return
        }
        const brick = document.createElement("div")
        brick.id = `brick-${id}`

        if (id % 3 === 2) {
            brick.dataset.foundation = true
        }
        document.body.appendChild(brick)
        id++
    },100)
}

export const repair = (...ids) => {
    for(let i = 0 ; i < ids.length; i++){
        const bid = document.getElementById(ids[i])
        if(!bid){return}
        if( bid.dataset.foundation == "true"){

            bid.dataset.repaired = "in progress"
        } else {
            bid.dataset.repaired = "true"
        }
    }
}

export const destroy = () => {
    const ids = document.querySelectorAll("div")
    let len = ids.length
    if (len === 0) {
        return
    }
    ids[len - 1].remove()
}