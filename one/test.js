// let const var
// var can be redeclared and updated a global scope variable
//let variable cannot be redeclared but can be updated , a block scopr variable
//const variable cannot be redeclared or updated , a block scope variable 

// 2015 before var was used then later es6 was introduced which was const,
// var num = 123

// {
//     var num = 345
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
// console.log(arr.indexOf(67))

// console.log(arr.join(arr2))


// let arr1 = ["hello","hi"]
// let arr2 = ["pop","push"]
// let arr3 = arr1.concat(arr2)
// console.log(arr3) //[ 'hello', 'hi', 'pop', 'push' ]


// arr2.push(arr1)
// console.log(arr2) //[ 'pop', 'push', [ 'hello', 'hi' ] ]

