const pple = require("./pple.json"); //get data

function computeAge(pers){
    let DOB = new Date(pers.birthdate); //get birthdate
    let YOB = parseInt(DOB.getFullYear());
    let year = new Date(); //get current time
    year = parseInt(year.getFullYear());

    let age = year - YOB;
    console.log(pers.name +" is " +age +" years old.");
}
pple.forEach(computeAge) //loop through all the data
