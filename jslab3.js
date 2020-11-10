
const submissions = [
    {name: "Jane", 
    score: 95,
    date: 2020-01-24,
    passed: true, },

    { 
    name: "Joe",
    score: 77,
    date: 2018-05-14,
    passed: true, },

    {name: "Jack",
    score: 59,
    date: 2019-07-25,
    passed: false,},

    {name: "Jill",
    score: 88,
    date: 2020-04-22,
    passed: true },

]

//construct an object and push to array. if score>=60, then passed is true
function addSubmission(array, newName, newScore, newDate) {
    const obj1 = {name: newName, score: newScore, date: newDate, passed:true};

    if(this.newScore<60){
        obj1.passed=false;
    }

     return array.push(obj1);


}

// remove object at specified index using splice
function deleteSubmissionbyIndex(array, index){

}

function deleteSubmissionbyIndex(array, index, score){

}

function editSubmission(array, index, score ){

}

function findSubmissionsByName(array, name){

}

function findLowestScore(array){

}

function findAverageScore(array){

}

function filterPassing(array){

}

function filter90andAbove(array){

}

//testing

console.log(submissions);
addSubmission(submissions, "Jasper", 77, 2020-10-20);
console.log(submissions);





