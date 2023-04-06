const muscle = ['Biceps', 'Triceps', 'Shoulders', 'Forearms', 'Chest', 'Lats',
    'Traps', 'Abdominals', 'Quads', 'Hamstrings', 'Glutes', 'Calves'];

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
    fetch(`https://musclewiki.p.rapidapi.com/exercises?muscle=${muscle[8]}`, options)
        .then(response => response.json())
        .then(response => exerciseDetails(response))
        .catch(err => console.error(err));
}

function exerciseDetails(info) {
    const exercises = getRandom(info, 4);
    const exerciseName = [exercises[0].exercise_name, exercises[1].exercise_name,
    exercises[2].exercise_name, exercises[3].exercise_name];
    const exerciseVideo = [exercises[0].videoURL, exercises[1].videoURL,
    exercises[2].videoURL, exercises[3].videoURL];
    
    document.querySelector('.exercise-name0').innerText = exerciseName[0];
    document.querySelector('.workout-video0').setAttribute('src', exerciseVideo[0]);
    document.querySelector('.exercise-name1').innerText = exerciseName[1];
    document.querySelector('.workout-video1').setAttribute('src', exerciseVideo[1]);
    document.querySelector('.exercise-name2').innerText = exerciseName[2];
    document.querySelector('.workout-video2').setAttribute('src', exerciseVideo[2]);
    document.querySelector('.exercise-name3').innerText = exerciseName[3];
    document.querySelector('.workout-video3').setAttribute('src', exerciseVideo[3]);
}

// callAPI();
