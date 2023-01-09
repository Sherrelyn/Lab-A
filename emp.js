const fs = require('fs')

const emp = function(note) {
    let findEmployee = JSON.parse(note)

    let empNote = findEmployee.map(function(n){
        return n.employee
    });
    
    console.log('Employee: '+ empNote)
}

module.exports = emp 