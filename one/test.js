// let const var
// var can be redeclared and updated a global scope variable
//let variable cannot be redeclared but can be updated , a block scopr variable
//const variable cannot be redeclared or updated , a block scope variable 

// 2015 before var was used then later es6 was introduced which was const,
// var num = 123

// {
//     var num = 345
//     console.log(num) //345
// }

// console.log(num) //345

// let num = 123

// {
//     let num = 345
//     console.log(num) //345
// }

// console.log(num) //123
// const num = 123

// {
//     const num = 345
//     console.log(num)
// }

// console.log(num)


// let score = "33"
// console.log(typeof(score))

// let valueInNumber = Number(23)
// console.log(valueInNumber)
// console.log(typeof(valueInNumber))

// let num = 678
// console.log(typeof num)

// newnum = Boolean(num)
// console.log(typeof newnum)

// console.log(newnum)
// console.log(typeof NaN)


////////// operations

// let value = 3
// let negvalue = -value
// console.log(negvalue) //-3

// let str1 = "eakshitha"
// let str2 = " cheppali"

// let str3 = str1 + str2
// console.log(str3)

// console.log(typeof 1+2/0)
// console.log("1"+2)
// console.log(1+9+"9") ==>109

// console.log(true+true)
// console.log(+"")

// let num1,num2,num3
// num1 = num2 = num3 = "2"+2
// console.log(num2)


//i = 12;
// i++
// console.log(i) //13

//i=12
//console.log(i++) //12

// console.log(2>1)
// console.log(true===true)

// console.log("2">1)
// console.log("02">1)

// num = null
// newnum = Number(num)

// console.log(typeof newnum)


// console.log(null >0 )
// console.log(null>=0)

// console.log(12==="12")

// console.log(undefined === null) //  true


// console.log(undefined == 0)
// console.log(undefined >0)
// console.log(undefined<0)


// let a = 9
// console.log(typeof a)

// const score = 400;
// console.log(score)


// const balance = new Number(score)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length) //3
// console.log(balance.toFixed(3)) // 400.000

// console.log(23.98674646.toPrecision(4))
// console.log(23.98674646.toPrecision(1))
// console.log(255553.98674646.toPrecision(3))
// console.log(255553.98674646.toFixed(3)) // works after the decimal part

// console.log(Number.EPSILON)


// console.log(Math);

// console.log(Object.getOwnPropertyNames(Math));


// console.log((Math.random()*10).toPrecision(1))


///Dates and time

//date is a built in class

// let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// console.log(mydate.getFullYear())
// console.log(typeof mydate)


// let mynewdate = new Date(2024,0,23)
// console.log(mynewdate.toDateString())

// let mynewdate1 = new Date("2023-01-14")
// let mynewdate3 = new Date("23-07-2025")
// console.log(mynewdate1.toDateString())

// let mytimestamp = Date.now()

// console.log(mytimestamp)
// console.log(mytimestamp/1000)

// Date.now() returns the current timestamp — the
//  number of milliseconds since January 1, 1970, 
//  00:00:00 UTC (the Unix Epoch).

// let date = new Date();
// console.log(date.toLocaleString('sa-IN'));

// let date = new Date();
// console.log(date.toLocaleString('hi-IN'));


// const arr = [1,2,3,"hello"];

// console.log(arr);

// console.log(arr.length);

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }


// const arr = new Array(1,2,4)


// let arr = [100,200,2,1,5,7,9];
// let arr2 = ["i","o"]
// console.log(arr);

// arr.push(null);
// arr.push(undefined);

// arr.pop()

// arr.shift()
//  console.log(arr)
// arr.unshift(67) // adds elemt at first

//  console.log(arr)

// console.log(arr.includes(200))
// console.log(arr.indexOf(7)) return index if exist othrwise -1

// console.log(arr.join(arr2))


// let arr1 = ["hello","hi"]
// let arr2 = ["pop","push"]
// let arr3 = arr1.concat(arr2)
// console.log(arr3) //[ 'hello', 'hi', 'pop', 'push' ]


// arr2.push(arr1)
// console.log(arr2) //[ 'pop', 'push', [ 'hello', 'hi' ] ]

//functions

// function chai()
// {
//     console.log("chai ready");
//    return 5
// }


// console.log(chai) // [Function : chai]
// chai()
// console.log(chai())  // prints undefined bcoz it doesnt return anything


// function addtwonumbers(num1,num2)
// {
//     console.log(num1+num2)
// }

// addtwonumbers(undefined,null)
// addtwonumbers("2",3)
// addtwonumbers(2,"3")
// addtwonumbers(2,"678abs")


//arguments the values we are passing (3,5)

//parameter are the denied in function (num1,num2) 


// function hello(val = 90)
// {
//     console.log(val)
// }

// hello() //default value


// function caluclateprice(val1,val2,...num1)
// {
//     return val1
// }

// console.log(caluclateprice(5,9,900,768))
// console.log(caluclateprice())

// spred operator rest operator


// A closure in JavaScript is
//  when a function remembers and 
//  has access to variables from its outer (enclosing) \
//  function, even after that outer function has finished executing.



//hoistingg 

// console.log(this)

// function chai()
// {
//     let name  = "eakshitha"
//     console.log(this.name)
// } //print undefined this cant be used with functions

// chai()

//  const arr  = ["eakshitha","cindrella","disney"]

// const arr2 = [1,2,3]
// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
//     // console.log(index)
// })


// arr2.forEach(function (val){
//     val+=1
// })

// console.log(arr2)

// function hello(){
//     console.log("hi")
// }

// hello();


// hello = (name)=>
// {
//    console.log(name)
// }

// hello("eakshitha")


// const arr = [
//     {
//         name : "eakshitha",
//         age: 34
//     },
//     {
//         name : "rohitha",
//         age : 89
//     },
//     {
//         name : "krishan",
//         age : 45
//     }
// ]

// arr.forEach((item)=>{
//     console.log(item.name,item.age)

// })
//for each val,index,arr
// it will not retuen any value

// const nums = [0,1,2,3,4,5,6,7,8,9,10]
// const values = nums.filter((item)=> item>2)
// console.log(values)

// even = nums.filter((item)=> item%2 ==0)
// console.log(even)

// console.log(nums)


 //const values = nums.filter((item)=>{
    // return item>2
 // } )  // if want to use curly braces then go withh retuen statement therwise [] array print sbcoz scope changes


//  const newnums = []
//  nums.forEach((item)=>{
//     if(item>2)
//     {
//         newnums.push(item)
//     }
//  })

//  console.log(newnums)

//  console.log(nums.filter((item)=>
//       item>2
//  ))

// let values = nums.map((num)=>
//    num+10
// )

// console.log(values)

// In JavaScript, filter and map are 
// two fundamental array methods used 
// for manipulating and transforming data. Both 
// methods iterate over an array and 
// return a new array, without modifying the original.




// filter() is used for selecting a subset
//  of elements based on a condition,
//  while map() is used for
//   transforming each element into a new value.


//can be use chaining .map().map().filter() 


//for of vs for each 
//forEach loop is used its an arraya methos mainly used when we use for of any iterayble things



// const fun = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      console.log("async function 2")
//      resolve()
//    },1000)
// })

// fun.then(()=>{
//     console.log("promise resolved")
// })



// const fun = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//    let error = false
//      if(!error){
//       resolve({username :"eakshitha",age :"90"})
//      }
//      else{
//        reject("error : something went wrong")
//      }
//    //   console.log("async function 2")
//    //   resolve()
//    },1000)
// })

// fun.then((obj)=>{
//     console.log("promise resolved")
//     console.log(obj.username)
//     console.log(obj.age)
// }).catch((str)=>{
//     console.log(str)
//     console.log("error occured")
// })

const promise  = new Pr