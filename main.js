// // Q2
// let personName1 = "John";
// console.log(`Hello ${personName1}, would you like to learn some Typescript today? `)
// // Q3
// let personName2 = "AlI"
// let lower = personName2.toLowerCase();
// let upper = personName2.toUpperCase()
// let firstChar = (personName2.slice(0, 1)).toUpperCase()
// let OtherChar = (personName2.slice(1)).toLowerCase()
// let capitalize = firstChar + OtherChar
// console.log(capitalize)
// // Q4
// console.log('Maulana Rumi once said, “If the light is in your heart, you will find your way home.”')
// // Q5
// let author = "Maulana Rumi"
// let quote = '“If the light is in your heart, you will find your way home.”'
// console.log(`${author} once said, ${quote}`)        
// // Q:6
// let personName = "\t\t\tAbdul\n Samad"
// console.log(personName)
// // Q:7
// let pName = "Abdul Samad"
// console.log(pName)
// // Q8
// console.log(5 + 3)
// console.log(2 * 4)
// console.log(64 / 8)
// console.log(10 - 2)
// // Q:9
// let favNum = 3
// console.log(`My favourite number is ${favNum}`)
// // Q:10  Addition Program
// let num1 = 5
// let num2 = 44
// console.log(num1 + num2)
// // Q11
// let friends = ["Ali", "Muzzammil", "Ahmed"]
// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }
// // Q:12
// let friends = ["Ali", "Muzzammil", "Ahmed"]
// for (var i = 0; i < friends.length; i++) {
//     console.log(`How are you ${friends[i]}`)
// }
// // Q:13
// let transport = ["Car", "Train", "Aeroplane"]
// console.log(`I would like to own a Toyota ${transport[0]}`)
// console.log(`I would like to better the situation of ${transport[1]}s of my country`)
// console.log(`I would like to go to Turkey by ${transport[2]}`)
// // Q:14 & Q:15 
// let guestList = ["Mohsin", "Usama", "Ayan"]
// for (var j = 0; j < guestList.length; j++) {
//     console.log(`${guestList[j]}, You are invited to dinner at our house on 14th August.`)
// }
// console.log(`${guestList[1]} will not come to the dinner`)
// guestList.splice(1, 1, "Ali")
// for (var j = 0; j < guestList.length; j++) {
//     console.log(`${guestList[j]}, You are invited to dinner at our house on 14th August.`)
// }
// console.log("We have found a bigger dinner table, so we're inviting more people!")
// // Q:16
// guestList.unshift("Shahbaz")
// console.log(guestList)
// guestList.splice(1, 1, "Sameer")
// guestList.push("Sohail")
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
// // Q:18
// let places = ["Turkey", "Dubai", "Northern Areas", "Islamabad", "Singapore"]
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
// // Q:19
// console.log(`${places.length} people are invited to the dinner`)
// // Q:20
// let mixedArray = ["Jheel Saiful Mulook", "K2 peak", "Sawat", "Turbela Dam"]
// console.log(mixedArray)
// //  Q:21
// let tsObj = { "name": "Ghulam Qadir", "rollNo": 3235, "qualification": "Matric" }
// console.log(tsObj)
// // Q:23
// let age = 15;
// console.log(age < 18 ? "You can't enjoy this ride" : "You can enjoy this ride")
// let trafficLight = "red";
// console.log(trafficLight === "red" ? "Stop" : "Go")
// let num = 6
// console.log(num % 2 === 0 ? "Even" : "Odd")
// let checkVar = "testing"
// console.log(typeof (checkVar) === "string" ? "String type variabe" : "Num type variable")
// let num1 = 3;
// let num2 = 4;
// console.log(num1 > num2 ? "Num1 is greater than Num2" : "Num2 is greater than Num1")
// let string1 = "Typerscript"
// let string2 = "typerscript"
// console.log(string1 === string2 ? "True" : "False")
// let gender = "Male"
// let age = 20
// if ((gender === "Male" && age >= 15) || (gender === "Female" && age >= 18)) {
//     console.log("You can enjoy that ride.")
// }
// else {
//     console.log("Your age is less")
// }
// let num = 36
// if (num % 2 === 0) {
//     console.log("even num")
// }
// else {
//     console.log("odd num")
// }
// CHECK ARRAY
// let a = "Karachi"
// let b = ["Lahore", 1, false]
// console.log(Array.isArray(a))
// console.log(Array.isArray(b))
// // Q:25
// let alien_color = "red"
// if (alien_color === "green") {
//     console.log("The player just earned 5 points")
// }
// // Q:26
// if (alien_color === "green") {
//     console.log("The player just earned 5 points")
// }
// else {
//     console.log("The player just earned 10 points")
// }
// // Q:27
// if (alien_color === "green") {
//     console.log("The player just earned 5 points")
// }
// else if (alien_color === "yellow") {
//     console.log("The player just earned 10 points")
// }
// else if (alien_color === "red") {
//     console.log("The player just earned 15 points")
// }
// // Q:28
// let age = 15
// if (age < 2) {
//     console.log("The person is a baby")
// }
// else if (age < 4) {
//     console.log("The person is a toddler")
// }
// else if (age < 13) {
//     console.log("The person is a kid")
// }
// else if (age < 20) {
//     console.log("The person is a teenager")
// }
// else if (age < 65) {
//     console.log("The person is an adult")
// }
// else if (age >= 65) {
//     console.log("The person is an elder")
// }
// // Q:29
// let favorite_fruits = ["mango", "apple", "banana"]
// for (var i = 0; i < favorite_fruits.length; i++) {
//     if (favorite_fruits[i] === "banana") {
//         console.log(`You really like ${favorite_fruits[i]}s`)
//     }
//     if (favorite_fruits[i] === "orange") {
//         console.log(`You really like ${favorite_fruits[i]}s`)
//     }
//     if (favorite_fruits[i] === "apple") {
//         console.log(`You really like ${favorite_fruits[i]}s`)
//     }
//     if (favorite_fruits[i] === "gava") {
//         console.log(`You really like ${favorite_fruits[i]}s`)
//     }
//     if (favorite_fruits[i] === "pineapple") {
//         console.log(`You really like ${favorite_fruits[i]}s`)
//     }
// }
// // Q:30
// let userNames = ["Eric", "John", "Clark", "Admin", "Jack"]
// for (var i = 0; i < userNames.length; i++) {
//     if (userNames[i] === "Admin") {
//         console.log(`Hello ${userNames[i]}, would you like to see a status report`)
//     }
//     if (userNames[i] !== "Admin") {
//         console.log(`Hello ${userNames[i]}, thank you for logging in again`)
//     }
// }
// // Q:31
// let users = ["Eric", "John", "Clark", "Jack"]
// users.length = 0
// console.log(users)
// if (users.length < 1) {
//     console.log("We need to find some users!")
// }
// // Q:32
// let current_users = ["Ali", "Ahmed", "Zaman", "Shayan", "Ayan"]
// let new_users = ["Shahbaz", "Shahzaib", "Ali", "Sameer", "Shayan"]
// let updatedArray: string[] = [];
// for (var i = 0; i < current_users.length; i++) {
//     for (var j = 0; j < new_users.length; j++) {
//         if (new_users[j] === current_users[i]) {
//             console.log(`${new_users[j]} will need to enter a new username.`)
//             new_users.splice(j, 1)
//         }
//     }
// }
// for (var x = 0; x < new_users.length; x++) {
//     console.log(`The username ${new_users[x]} is available`)
// }
// // Q:33
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (var k = 0; k < numbers.length; k++) {
//     if (numbers[k] === 1) {
//         console.log(`${numbers[k]}st`)
//     }
//     else if (numbers[k] === 2) {
//         console.log(`${numbers[k]}nd`)
//     }
//     else if (numbers[k] === 3) {
//         console.log(`${numbers[k]}rd`)
//     }
//     else if (numbers[k] > 3) {
//         console.log(`${numbers[k]}th`)
//     }
// }
// // Q:34
// let pizzas = ["Italian", "Chicken Spicy", "Pepperoni"]
// for (var i = 0; i < pizzas.length; i++) {
//     console.log(`I like ${pizzas[i]} pizza`)
// }
// console.log("I don't really like pizza")
// // Q:35
// let animals = ["Dog", "Ox", "Wolf"]
// for (var i = 0; i < animals.length; i++) {
//     console.log(`A ${animals[i]} would make a great pet`)
// }
// console.log("Any of these animals would make a great pet!")
// // Q:36
// function make_shirt(size, text) {
//     console.log(`The size of the shirt is ${size} and the text on shirt is "${text}"`)
// }
// make_shirt("Large", "Let's have FUN!")
// // Q:38
// function describe_city(cityName, country = "Pakistan") {
//     console.log(`${cityName} is in ${country}`)
// }
// describe_city("Multan")
// describe_city("Karachi")
// describe_city("Jeddah", "Saudia Arabia")
// // Q:39
// function city_country(city, country) {
//     return `"${city}, ${country}"`
// }
// let pair1 = city_country("Karachi", "Pakistan")
// console.log(pair1)
// let pair2 = city_country("Mumbai", "India")
// console.log(pair2)
// let pair3 = city_country("Istanbul", "Turkey")
// console.log(pair3)
// // Q:40
// function make_album(nameOfArtist, title, tracks) {
//     let album = {
//         artistName: nameOfArtist,
//         albumTitle: title,
//         noOfTracks: tracks
//     }
//     return `Artist Name: ${album.artistName}\nAlbum Title: ${album.albumTitle}\nNo of Tracks: ${album.noOfTracks}\n`
// }
// let album1 = make_album("Atif Aslam Walker", "Thinking", "3")
// console.log(album1)
// let album2 = make_album("Ali Zafar", "Junoon", "7")
// console.log(album2)
// let album3 = make_album("Sahir Ali Bagga", "Heroes", "2")
// console.log(album3)
// // Q:41
var magicians = ["Siri", "Jack", "Raju"];
// function show_magicians(magiciansNames) {
//     for (var i = 0; i < magiciansNames.length; i++) {
//         console.log(`${magiciansNames[i]}`)
//     }
// }
// show_magicians(magicians)
// // Q:42
// function make_great(magiciansNames) {
//     for (var i = 0; i < magiciansNames.length; i++) {
//         magiciansNames[i] = `Great ${magiciansNames[i]}`
//     }
// }
// make_great(magicians)
// show_magicians(magicians)
// // Q:43
// function make_great(magiciansNames) {
//     let updateMagicians = [...magiciansNames]
//     for (var i = 0; i < updateMagicians.length; i++) {
//         updateMagicians[i] = `Great ${updateMagicians[i]}`
//     }
//     console.log("updateMagicians=>>", updateMagicians)
// }
// show_magicians(magicians)
// make_great(magicians)
// // Q:44
// let items = []
// function make_sandwich(...items) {
//     console.log(`The person wants in sandwich are ${items}`)
// }
// make_sandwich("cheese", "garlic")
// make_sandwich("cheese", "garlic", "mayon sauce")
// make_sandwich("Chicken cheese", "garlic", "mayon sauce", "Veg cheese", "Carrot")
// // Q:45
function car_info(manufacturer, model, optionalFeature, color) {
    if (color === void 0) { color = ""; }
    var carInfo = {
        manufacturerName: manufacturer,
        modelName: model,
        color: color,
        optfeature: optionalFeature
    };
    console.log("Model Name: ".concat(carInfo.modelName, "\nManufacturer: ").concat(carInfo.manufacturerName, "\nColor: ").concat(carInfo.color, "\nOptional Feature: ").concat(carInfo.optfeature));
}
car_info("Toyota", "2005", "Automatic", "Silver");
