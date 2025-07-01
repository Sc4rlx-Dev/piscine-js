export async function supperheros() {
    console.log('test')
    let res;
    const url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        res = data;
    } catch (error) {
        console.error("Error fetching superheroes:", error)
    }
    console.log(res)
    return res
}



// const neww = new Worker("worker.js")

// neww.postMessage('calc')

// Worker.neww = function (evnt) {
//     console.log('main :', evnt.data);
    
// }
// console.log('running ..')