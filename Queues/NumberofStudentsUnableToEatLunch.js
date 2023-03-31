/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let lineLength = 0; 

    while(students.length > 0){
        if(lineLength === students.length) break; 

        if(students[0] == sandwiches[0]){
            students.shift(), sandwiches.shift()
            lineLength = 0
        } else{
            students.push(students.shift())
            lineLength++
        }
    }

    return students.length 
};
