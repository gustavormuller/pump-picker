const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ac66789b2mshcc987be0f424459p1f91f4jsn7bb0646b695e',
        'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
    }
};

const getRandom = (arr, nr) => arr
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, nr)

function callAPI() {
    fetch('https://musclewiki.p.rapidapi.com/exercises?muscle=Chest', options)
        .then(response => response.json())
        .then(response => console.log(getRandom(response, 4)))
        .catch(err => console.error(err));
}

callAPI();