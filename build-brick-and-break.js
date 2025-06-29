export const build = (n) => {
    let id = 1
    const int = setInterval(() => {
        if (id > n) { clearInterval(int) ; return }
        const nd = document.createElement("div")
        nd.dataset.id = `brick-${id}`
        if (id % 3 === 2) { nd.setAttribute("foundation", true) }
        document.body.appendChild(nd)
        id++
    }, 100)
}

export const repair = (...ids) => {
    console.log(ids);
    array.forEach(ids => {
        
    })
    

}

export const destroy = () => {
    

}