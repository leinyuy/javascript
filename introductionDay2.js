//the common way of declaring a function
// function sumTwoNumbers(...numbers){
//     let sum =0;
//     numbers.forEach((a)=>{
//         sum+=a;
//     });
//     return sum;
// }
// console.log(sumTwoNumbers(1,3,19));

/* es6 syntax of function declaration*/ 

// const subtractTwoNumbers=(a,b)=>{
// return a-b;
// };
// console.log(subtractTwoNumbers(8,3))


// Exercise 1
// Given a list of intergers, count the number of pairs of number in the list
 
// function countPairs(numbers){
//     let pairs=0; 
//     let counts=[];
//     for(let i=0; i<numbers.length; i++){
        
//         numbers.map((num)=>{
//             if (numbers[0]===num){
//                 counts.push(num);
//             }
//         });
//         pairs+= Math.floor(counts.length/2);
//         counts=[];
//          numbers=numbers.filter((num)=> num !== numbers[0]);
//     }
//     return pairs;
//     }
//     console.log(countPairs([1,6,5,8,5,5,5]))


// *objects*/ 
// const person={
//     name: 'delarosa',
//     password: 'jlsjaljf',
//     email: 'lein@gmail.com',
//     }
// console.log(person.password)

// person.getName();
// creating objects from classes

// class Person{
//     constructor(name, email, password){
//         this.name=name;
//         this.email=email;
//         this.password=password;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// const jordan=new Person("jordan","jordan@gmail.com", "jordan@123");
// jordan.getName();

// const sharon =new Person("Sharon", "sharon@gmail.com", "1234");
// sharon.getName();
// console.log(Object.keys(jordan));

// Exercise 2


// sum all the numbers in this array
// append a property called email to the object found in this array.
// return a new Array excluding the value "0".

const values =[2,1,'4',"1","3","Yooman",{ name: "Jordan"}];  //the array set we'll be working on
function arr(items){
let product=1;
items.forEach(function (value){
    if(!isNaN(Number(value))){
        product*=Number(value);
    }
})
return product;
}
console.log(arr(values))                            //displays sum
values[5].email="dre@gmail.com";                    //appending a new property to the object above
console.log(values)                                 //displays the values with the new property in object

const newValues=values.filter((value)=>value!=="0")             //removed the "0" from the array with the filter, value is a keyword
console.log(newValues)


  