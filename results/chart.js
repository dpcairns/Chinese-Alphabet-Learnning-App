import { getUser } from '../utils/getuser.js';

const user = getUser();


// let yunMuCorrect = user.yunMu.correct;
// let yunMuIncorrect = user.yunMu.incorrect;
// let shengMuCorrect = user.shengMu.correct;
// let shengMuIncorrect = user.shengMu.incorrect;
// let zhengTiMuCorrect = user.zhengTiMu.correct;
// let zhengTiMuIncorrect = user.zhengTiMu.incorrect;

console.log(user);

//-------------------------------------------------//

const ctx = document.getElementById('results-chart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    fillOpacity: .3,
    // The data for our dataset
    data: {
        labels: ['Yun Mu', 'Sheng Mu', 'Zheng Ti'],
        datasets: [{
            label: 'Correct',
            backgroundColor: '#8FBFB6',
            borderColor: 'white',
            data: [user.yunMu.correct, user.shengMu.correct, user.zhengTi.correct]
        }, {
            label: 'Incorrect',
            backgroundColor: '#F2133C',
            borderColor: 'white',
            data: [user.yunMu.incorrect, user.shengMu.incorrect, user.zhengTi.incorrect]
        }]
    },

    // Configuration options go here
    options: {}
});