// topstories V
// newstories
// beststories
// item-id
// username
// maxitem

async function Get_data(category){
    const url = `https://hacker-news.firebaseio.com/v0/${category}.json`
    try {
        document.body.innerHTML = `<div>Loading ${category}...</div>`
        const resp = await fetch(url)
        if(!resp.ok){
            console.log("error")
        }
        const json = await resp.json()
        // console.log(json)

        let output = `
            <h1>Hacker News - ${category}</h1>
            <p>Found ${json.length} stories</p>
            <ul>
        `;

        const dispids = json
        dispids.forEach(element => {
            Get_id(element)
            output += `<li>Story ID: ${element}</li>`
            url_id = `https://hacker-news.firebaseio.com/v0/item/${element}.json`
            // console.log(element)
        })
        output += '</ul>';
        document.body.innerHTML = output;
        // console.log(arr)
    }
    catch (error) {
        console.log(error.message)
    }

}


async function Get_id(element) {
        const url = `https://hacker-news.firebaseio.com/v0/item/${element}.json`
    try {
        document.body.innerHTML = `<div>Loading ${element}...</div>`
        const resp = await fetch(url)
        if(!resp.ok){
            console.log("error")
        }
        const json = await resp.json()
        console.log(json)

        let output = `
            <h1>Hacker News - ${element}</h1>
            <p>Found ${json.length} stories</p>
            <ul>
        `;

        const dispids = json
        dispids.forEach(element => {
            output += `<li>Story ID: ${element}</li>`
            url_id = `https://hacker-news.firebaseio.com/v0/item/${element}.json`
            // console.log(element)
        })
        output += '</ul>';
        document.body.innerHTML = output;
        // console.log(arr)
    }
    catch (error) {
        console.log(error.message)
    }
}
// topstoriestopstories
// Get_data('askstories')
// Get_data('topstories')
Get_data('newstories')
// Get_data('beststories')

