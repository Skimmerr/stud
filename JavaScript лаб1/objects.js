function one() {

    let employee = {
    firstName:'Василий',
    lastName:'Тёркин',
    age:28
}
console.log(employee);

}

function two() {

let employee = {
    firstName:'Василий',
    lastName:'Тёркин',
    age:28
}
function getFullName(){
    let name = employee.firstName;
    let surename = employee.lastName;
    console.log(name, surename);
}
}

function three() {

let employee = {
    firstName:'Василий',
    lastName:'Тёркин',
    age:28
}
function getFullName(){
    let name = employee.firstName;
    let surename = employee.lastName;
    return name + ' ' + surename;
}

employee = {
    firstName:'Василий',
    lastName:'Тёркин',
    fullName: getFullName(),
    age:28
}
}