// var student1 = {
//     name :"Saad",
//     age : 21,
//     roll :088
// }
// var student2 = {
//     name :"rafeh",
//     age : 20,
//     roll :104
// }
// var student3 = {
//     name :"Usama",
//     age : 22,
//     roll : 091
// }
// console.log(student1,student2,student3)

// function Student(name,age,roll){
//     this.name = name,
//     this.a = age;
//     this.roll = roll
    // this.sum = function(){
    //     return this.name + " "+ this.a
    // }
// }
var obj = {
    name : "saad",
    age : 21
}
for(var key in obj){
    document.write(key +" "+obj[key],"<br>")
}
// console.log("constructor" in obj)
// console.log(obj.hasOwnProperty('constructor'))
// var print = new Student("saad",21,088)
// var print2 = new Student("rafe",21,088)
// var print3 = new Student("usama",21,088)

// Student.prototype.sum = function(){
//     return this.name + this.a + this.roll
// }

// console.log(print,print2,print3)


// print2.sum = function(){
//     return this.name + this.a
// }

// print2.sum = function(){
//     return this.name + this.a
// }

// print2.sum = function(){
//     return this.name + this.a
// }
    // var ok = print.sum()
    // console.log(ok)
// var print2 = new Student("usama",21,088)
// var print3 = new Student("rafeh",21,088)

// console.log(print2,print3)