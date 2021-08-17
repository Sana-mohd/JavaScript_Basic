// var a=20
// if (a/5==9){
//     console.log(true)
// }
// else;{console.log(false)}
// x=5
// let x
// console.log(x)

// var grade='B';  
// var result;  
// switch(grade){  
// case 'A':  
// result="A Grade";  
// break;  
// case 'B':  
// result="B Grade";  
// break;  
// case 'C':  
// result="C Grade";  
// break;  
// default:  
// result="No Grade";  
// }  
// var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
// console.log(sampleStr)

//var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// console.log(person.fullName)

// var x=new Number()
// x=6
// console.log(typeof x)

// let age = 15;
// age=89;
// let result =
//     (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
// console.log(result);
// var a="sana"
// let b="ali"
// var a="abbu"
// var e=88764897697536887624565
// var l=e+7
// // var e=Symbol("pk")
// console.log(l)

// var s="sana"
// var s=7654.515887
// console.log(parseInt(s),parseFloat(s))
// console.log(s.toFixed(4))
// var a=98576590239876n
// var b=a+2n
// // var b=false
// console.log(typeof 2n)

// var a=87;
// var b=89
// if (a>b){
//     console.log(true)
// }
// else if (a<b){
//     console.log(false)
// }
// var a=2+5;
// ++a
// var a=2,b=3
// console.log(a^b)
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     phone: 12345
// }

// console.log(delete person.phone);
// function add(){
//     var a=7,b=6;
//     return "sana"
// }
// console.log(typeof add())
// var i=1
// while (i<=5){
//     console.log(i)
//     ++i
// }
// for (var i=0;i<=5;i++){
//     console.log(i)
// }

// do{
//     var i=2
//     if (i%2==0){
//         console.log(i)
//         i++
//     }
// }
// while (i<=5);
// const test = {
//     prop: 42,
//     func: function() {
//       return this.func;
//     },
//   };
  
//   console.log(test.func());
// result = Math.floor('20.01');
// console.log(result); // 20

// const number = 2;
// if (number > 0) {
//     console.log("The number is positive.");
//     var a=6;
// } else {
//    console.log("The number is negative or zero.");
// }

// console.log(a)

// const n = 2;

// // looping from i = 1 to 5
// for (let i = 1; i <= n; ++i) {
//     console.log(i);
// }

// let i = 1, n = 5;

// // while loop from i = 1 to 5
// while (i <= n) {
//     console.log(i);
//     i+=2;
// }

// let i = 1;
// const n = 5;
// do {
//     console.log(i);
//     i++;
// } while(i <= n);

ar year = 2016;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}

console.log(dayCount); // 29