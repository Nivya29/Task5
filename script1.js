 var resume = [{
    "personalInformation" : {
        "firstName": "B.Nivya",
        "lastName": "Dharshini",
        "email": "nividharsh@gmail.com",
        "phoneNumber": 1234567890,
    },
    "address": {
        "street": "XYZ",
        "area":"Kenny Street",
        "place": "Chennai"
        },

    "education" : 
        {
            "degree" : "Bachelor of Engineering",
            "course" :"Computer Science",
            "college" : "St.xyz college",
            "graduationYear" : 2019
        },
    "experience" : 
        {
            "position" : "Associate",
            "company" : "ABC",
            "yearsOfExperience" : 2
        },
    "skills" : {
        "front-end":"Html,CSS,Basics Of JavaScript",
        "back-end":"Basics of React"
    }
    
}]
console.log(resume);

// for loop
for(var i=0; i<resume.length; i++){
    var obj = resume[i]
    console.log(obj.experience);
}

// for in loop
for(var key in resume){
    console.log(resume[key].skills)
}

// for of loop
let a="";
for(var x of resume){
    a += x;
}
console.log(resume[key].education);

//for each loop
resume.forEach(function(obj){
    console.log(obj.personalInformation);
})