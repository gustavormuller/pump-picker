function changeSource() {
    console.log('aaaa');
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ac66789b2mshcc987be0f424459p1f91f4jsn7bb0646b695e/',
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
    }
};

fetch('https://exerciseapi3.p.rapidapi.com/search/muscles/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
