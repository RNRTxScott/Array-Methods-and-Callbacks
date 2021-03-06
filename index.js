import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// Task 1a
const finals2014 = fifaData.filter(item => 
    item.Year === 2014 && item.Stage === "Final"
);
console.log(finals2014[0]["Home Team Name"]);

// Task 1b
console.log(finals2014[0]['Away Team Name']);

// Task 1c
console.log(finals2014[0]['Home Team Goals']);

//Task 1d
console.log(finals2014[0]['Away Team Goals']);

// Task 1e
console.log(finals2014[0]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
const getFinals = fifaData.filter(item => 
     item.Stage === "Final"
);
console.log(getFinals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
let years = []
function getYears(cb) {
    cb.forEach(function(item){
        years.push(item.Year)
    })
    return years;
};

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
let winners = [];
function getWinners(cb) {
cb.forEach(function(item){
    if (item['Home Team Goals'] > item["Away Team Goals"]){
        winners.push (cb["Home Team Name"])
    }
    else if (item['Home Team Goals'] < item['Away Team Goals']){
        winners.push (item['Away Team Name'])
    }
    else{
        winners.push (cb['Away Team Name'])
    }
})
return winners;
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    for (let i = 0; i < cb1.length; i++){
        console.log(`In ${cb1[i]}, ${cb2[i]} won the world cup!`)
    }

};

getWinnersByYear(getYears(getFinals), getWinners(getFinals));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


function getAverageGoals(data){
    const home = [];
    const away = [];
    data.forEach((item) => {
        home.push(item['Home Teach Goals']);
        away.push(item['Away Team Goals']);
    });
    let homeAverage = home.reduce((item, accumulator) => item + accumulator, 0)
    let homeAverage = away.reduce((item, accumulator) => item + accumulator, 0)
    homeAverage /= home.length;
    awayAverage /= away.length;
    return {homeAverage, awayAverage};
}
console.log(getAverageGoals(fifaData));
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
