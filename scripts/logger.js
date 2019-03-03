const person = {
    name: 'Chris Davis',
    role: 'Student'
}

const newperson = {
    name: 'Jim Davis',
    role: 'Daddy'
}

function logStudent(student, domID) {
    var aString = "<h4>Name: " + student.name + "</h4><br><h5>Role: " + student.role + "</h5>";
    document.getElementById(domID).innerHTML = aString;
}

function callBack1(afunc) {
    afunc(person, 'firstLogger')
}

callBack1( () => logStudent(newperson, 'secondLogger'));