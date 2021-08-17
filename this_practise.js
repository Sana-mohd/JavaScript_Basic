// let user = {
//     name: 'Sana',
//     address: 'HYD',
//     getName: function() {
//         console.log(this.name);
//     }
// };

// user.getName();

// function decorateLogName(obj) {
//     obj.logName = function() {
//         console.log(this.name);
//     }
// };

// let tom = {
//     name: 'Tom',
//     age: 7
// };

// let jerry = {
//     name: 'jerry',
//     age: 3
// };

// decorateLogName(tom);
// decorateLogName(jerry);

// tom.logName();
// jerry.logName();

let getName = function() {
    console.log(this.name);
}

let user = {
  name: 'Tapas',
  address: 'Freecodecamp'  
};

getName.call(user);
// user.getName()