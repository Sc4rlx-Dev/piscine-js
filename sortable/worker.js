omsg = function (evnt) {
    console.log("hey woker" ,  evnt.data)
    let total = 0
    for (let i = 0 ; i < 1e8; i++){
        total += i
    }
postMessage(`sum is ${total}`)
}