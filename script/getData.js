async function getData(url){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    return data
}

export {getData}