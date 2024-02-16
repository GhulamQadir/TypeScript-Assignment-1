// Q1
// let personName1 = "John";
// console.log(`Hello ${a}, would you like to learn some Typescript today? `)
// Q2
// let personName2 = "AlI"
// let lower = personName2.toLowerCase();
// let upper = personName2.toUpperCase()
// let firstChar = (personName2.slice(0, 1)).toUpperCase()
// let OtherChar = (personName2.slice(1)).toLowerCase()
// let capitalize = firstChar + OtherChar
// console.log(capitalize)
// Q3
// console.log('Maulana Rumi once said, “If the light is in your heart, you will find your way home.”')
// Q4
// let author = "Maulana Rumi"
// let quote = '“If the light is in your heart, you will find your way home.”'
// console.log(`${author} once said, ${quote}`)        
// let personName = "\t\t\tAbdul\n Samad"
// console.log(personName)
// let pName = "Abdul Samad"
// console.log(pName)
// Q8
// console.log(5 + 3)
// console.log(2 * 4)
// console.log(64 / 8)
// console.log(10 - 2)
// Q:9
// let favNum = 3
// console.log(`My favourite number is ${favNum}`)
// Q:10  Addition Program
// let num1 = 5
// let num2 = 44
// console.log(num1 + num2)
// Q11
// let friends = ["Ali", "Muzzammil", "Ahmed"]
// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }
// Q:12
// let friends = ["Ali", "Muzzammil", "Ahmed"]
// for (var i = 0; i < friends.length; i++) {
//     console.log(`How are you ${friends[i]}`)
// }
// Q:13
// let transport = ["Car", "Train", "Aeroplane"]
// console.log(`I would like to own a Toyota ${transport[0]}`)
// console.log(`I would like to better the situation of ${transport[1]}s of my country`)
// console.log(`I would like to go to Turkey by ${transport[2]}`)
// Q:14 & Q:15 
var guestList = ["Mohsin", "Usama", "Ayan"];
// for (var j = 0; j < guestList.length; j++) {
//     console.log(`${guestList[j]}, You are invited to dinner at our house on 14th August.`)
// }
// console.log(`${guestList[1]} will not come to the dinner`)
// guestList.splice(1, 1, "Ali")
// for (var j = 0; j < guestList.length; j++) {
//     console.log(`${guestList[j]}, You are invited to dinner at our house on 14th August.`)
// }
// console.log("We have found a bigger dinner table, so we're inviting more people!")
// Q:16
guestList.unshift("Shahbaz");
// console.log(guestList)
guestList.splice(1, 1, "Sameer");
guestList.push("Sohail");
// for (var j = 0; j < guestList.length; j++) {
//     console.log(`${guestList[j]}, You are invited to dinner at our house on 14th August.`)
// }
// console.log("Our dinner table have not arrived on time, so we can invite only two people!")
// console.log(guestList)
// for (var j = guestList.length; j >= 3; j--) {
//     console.log(`${guestList[j - 1]}, Sorry! We can't invite to the dinner.`)
// }
// for (var i = 0; i < 2; i++) {
//     console.log(`${guestList[i]}, You are still invited to the dinner`)
// }
// Q:18
var places = ["Turkey", "Dubai", "Northern Areas", "Islamabad", "Singapore"];
// console.log(places)
// console.log(places.sort())
// console.log(places.sort().reverse())
// console.log(places)
// let reversePlaces = places.reverse()
// console.log(places)
// let reversePlacesAgain = places.reverse()
// console.log(places)
// let sortPlaces = places.sort()
// console.log(places)
// let reverseSortedPlaces = places.reverse()
// console.log(places)
// Q:19
// console.log(`${places.length} people are invited to the dinner`)
// Q:20
// let mixedArray = ["Jheel Saiful Mulook", "K2 peak", "Sawat", "Turbela Dam"]
// console.log(mixedArray)
// //  Q:21
// let tsObj = { "name": "Ghulam Qadir", "rollNo": 3235, "qualification": "Matric" }
// console.log(tsObj)
// Q:23
var age = 15;
console.log(age < 18 ? "You can't enjoy this ride" : "You can enjoy this ride");
var trafficLight = "red";
console.log(trafficLight === "red" ? "Stop" : "Go");
var num = 6;
console.log(num % 2 === 0 ? "Even" : "Odd");
var checkVar = "testing";
console.log(typeof (checkVar) === "string" ? "String type variabe" : "Num type variable");
var num1 = 3;
var num2 = 4;
console.log(num1 > num2 ? "Num1 is greater than Num2" : "Num2 is greater than Num1");
