import { getUser } from '../utils/getuser.js';


//-------------------------------------------------//

// could destructure like so if you wanted to
const {
    shengMu: {
        correct: shengMuCorrect,
        incorrect: shengMuIncorrect

    },
    yunMu: {
        correct: yunMuCorrect,
        incorrect: yunMuIncorrect
    },
    zhengTi: {
        correct: zhengTiCorrect,
        incorrect: zhengTiIncorrect,
    }
} = getUser();

const ctx = document.getElementById('results-chart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    fillOpacity: .3,
    // The data for our dataset
    data: {
        labels: ['Sheng Mu', 'Yun Mu', 'Zheng Ti'],
        datasets: [{
            label: 'Correct',
            backgroundColor: '#8FBFB6',
            borderColor: 'white',
            data: [shengMuCorrect, yunMuCorrect, zhengTiCorrect]
        }, {
            label: 'Incorrect',
            backgroundColor: '#F2133C',
            borderColor: 'white',
            data: [shengMuIncorrect, yunMuIncorrect, zhengTiIncorrect]
        }]
    },

    // Configuration options go here
    options: {}
});


