//can also use Date() for the date. make the date a string otherwise
const submissions = [
    {name: "Jane", 
    score: 95,
    date: "2020-01-24",
    passed: true },

    { 
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true, },

    {name: "Jack",
    score: 59,
    date: "2019-07-25",
    passed: false},

    {name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true },

]

//construct an object and push to array. if score>=60, then passed is true
function addSubmission(array, newName, newScore, newDate) {
    const obj1 = {name: newName, score: newScore, date: newDate, passed:true};

    if(newScore<60){
        obj1.passed=false;
    }

     return array.push(obj1);

}

// remove object at specified index using splice
function deleteSubmissionbyIndex(array, index){
   array.splice(index, 1);
    return array;
}

//remove the object from the array that has the provided name. incorportae fincdIndex method an splice
function deleteSubmissionbyName(array, name){
    const index = array.indexOf(name);
    array.splice(index, 1);
}

//update object's score in array at indecs. Use conditional to se value for the passed property
//to true it socre is >= 60
function editSubmission(array, index, score ){
    const obj = array[index];
    obj.score=score;
    
     if(score >= 60){
        obj.passed=true;
     } else {
         obj.passed=false;
     }

}

//return object in the array that thas the provided name. use find method
function findSubmissionByName(array, name){
    function isName(namer){
        return namer.name === name;
    }

    //console.log(array.find(isName));
    return array.find(isName);
}

//return object that has the lowest score. use forEach to loop through the whole array
function findLowestScore(array){
    let lowestScore = 100;

    array.forEach(element => {
        
        if(element.score<lowestScore){
            
            lowestScore=element.score;
            
        }
    });
    
    return lowestScore;
}

//return average quiz score use a for...of loop
function findAverageScore(array){
    let total=0;

   // console.log(total);
    for (const element of array){
        total+=element.score;
    }

    return total/array.length;

}

//return a new array using the filter method. filter should find objects in the arrya that have passing scores
function filterPassing(array){
    let passing = array.filter(function (o) {
        return o.passed === true;
    });
    
    return passing;
}

//return a new array using filter/ find objects that have scores >=90
function filter90andAbove(array){
    let over90 = array.filter(function (o) {
        return o.score > 90;
    });
    
    return over90;
}


//testing


//addSubmission test
addSubmission(submissions, "Jasper", 77, "2020-10-20");
console.log(submissions);

// //deleteSubmissionbyIndex test
deleteSubmissionbyIndex(submissions, 0);
console.log(submissions);

// //deleteSubmissionbyName test
deleteSubmissionbyName(submissions, "Jasper");
console.log(submissions);

//editSubmission test
editSubmission(submissions, 0, 45);
console.log(submissions);

//findSubmissionByName test
findSubmissionByName(submissions, "Joe");

//findLowestScore test
console.log(`This is the lowest score ${findLowestScore(submissions)}`);

//findAverageScore test

console.log(`This is the average score ${findAverageScore(submissions)}`);

//test filterPassing
console.log(filterPassing(submissions));


//test filter90andAbove
console.log(filter90andAbove(submissions));




