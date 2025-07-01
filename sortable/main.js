const supperheros =()=> {
    const url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";
    return fetch(url)
        .then(resp => resp.json());
}

const tabl = (heros) => {
    const tbl = document.getElementById("table")
    heros.forEach(hero => {
        const tr = document.createElement('tr')

        const td_icon = document.createElement('td')
        const img = document.createElement('img')
        img.src = hero.images?.lg || ''
        img.alt = hero.name || ''
        img.width = 32
        img.height = 32
        td_icon.appendChild(img)

        const td_Name = document.createElement('td')
        const td_Full = document.createElement('td')
        const td_Powerstats = document.createElement('td')
        const td_Race = document.createElement('td')
        const td_Gender = document.createElement('td')
        const td_Height = document.createElement('td')
        const td_Weight = document.createElement('td')
        const td_Place = document.createElement('td')
        const td_Alignment = document.createElement('td')
        
        td_Name.textContent = hero.name || ''
        td_Full.textContent = hero.biography?.fullName || ''
        td_Powerstats.textContent = JSON.stringify(hero.powerstats)
        td_Race.textContent = hero.appearance?.race || ''
        td_Gender.textContent = hero.appearance?.gender || ''
        td_Height.textContent = hero.appearance?.height?.[1] || ''
        td_Weight.textContent = hero.appearance?.weight?.[1] || ''
        td_Place.textContent = hero.biography?.placeOfBirth || ''
        td_Alignment.textContent = hero.biography?.alignment || ''

        tr.appendChild(td_icon)
        tr.appendChild(td_Name)
        tr.appendChild(td_Full)
        tr.appendChild(td_Powerstats)
        tr.appendChild(td_Race)
        tr.appendChild(td_Gender)
        tr.appendChild(td_Height)
        tr.appendChild(td_Weight)
        tr.appendChild(td_Place)
        tr.appendChild(td_Alignment)

        tbl.appendChild(tr)
    })
}

supperheros().then(data => {
    // console.log(data);
    tabl(data)
})