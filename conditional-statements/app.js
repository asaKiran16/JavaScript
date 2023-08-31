
/* conditional statements
if 
if else 
if else if else */

let age = prompt("Enter your age : ");
if (age>=18){
    console.log("You can vote & get driving license");
}
else{
    console.log("You can't vote & not eligible to get driving license");
}

// by using if-else-if we need to give salary range starting from 100000 to 10000 we need to mention grading like If salary is between 80000 to 100000 grade
salary=200000
if (salary>100000){
    console.log("100000 is the highest salary for an employee in our company");
}
else if(salary<=100000 && salary>=80000){
    console.log("Employee belongs to grade 'A'")
}
else if(salary<80000 && salary>=60000){
    console.log("Employee belongs to grade 'B'")
}
else if(salary<60000 && salary>=40000){
    console.log("Employee belongs to grade 'C'")
}
else if(salary<40000 && salary>=20000){
    console.log("Employee belongs to grade 'D'")
}
else{
    console.log("Your a contractor")
}

let jobRole = "Team lead";
let returns;
switch (jobRole) {
    case "Manager":
        console.log("Manager will look after whole project!");
    break;
    case "Team lead":
        return "Team lead look after some portion of project!";
    
    case "developer":
        return "Developers developes the project!";
    
    case "Tester":
        return "Testers tests the code written by developer!";
    
    case "devops engineer":
        return "devops engineer will be taking care of deployment!";
    
    case "Maintenance engineer":
        return "Maintenance engineer will update the required changes!";

    default:
        return "He is not an employee";
}

