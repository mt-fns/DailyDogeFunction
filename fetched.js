const fetch = require('node-fetch')



async function fetchData() {
    let url = 'http://localhost:9000/webscrape';
    let urlFetch = await fetch(url);
    let urlJson = await urlFetch.json();
    
        
    console.log(urlJson[0].image)
    
}

fetchData()
