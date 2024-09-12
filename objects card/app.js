
const users = [
    {
        name: "Alice",
        age: 25,
        hobbies: ["Reading", "Painting"]
    },
    {
        name: "Bob",
        age: 30,
        hobbies: ["Playing guitar", "Cooking"]
    },
    {
        name: "Charlie",
        age: 22,
        hobbies: ["Hiking", "Photography"]
    },
    {
        name: "David",
        age: 28,
        hobbies: ["Running", "Watching movies"]
    },
    {
        name: "Ella",
        age: 35,
        hobbies: ["Traveling", "Knitting"]
    },
    {
        name: "Frank",
        age: 20,
        hobbies: ["Gaming", "Drawing"]
    },
    {
        name: "Grace",
        age: 27,
        hobbies: ["Singing", "Dancing"]
    },
    {
        name: "Hannah",
        age: 32,
        hobbies: ["Cooking", "Yoga"]
    },
    {
        name: "Ian",
        age: 24,
        hobbies: ["Playing football", "Reading" ,'a' , 'b' , 'c']
    },
    {
        name: "Jessica",
        age: 29,
        hobbies: ["Writing", "Cycling", 'swimming']
    }
];

// console.log(users)


const div = document.querySelector('#users');

for (let i = 0; i < users.length; i++){
console.log(users[i])

let hobbiesList = '';
for (let j = 0; j < users[i].hobbies.length; j++) {
    hobbiesList += `<li>${users[i].hobbies[j]}</li>`;}
div.innerHTML += `
<h1>Name: ${users[i].name}</h1>
<h1>Age: ${users[i].age}</h1>
<ul>
${hobbiesList}
</ul>
<hr/>
`
}


// console.log(users);

// const div = document.querySelector('#users');

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     let hobbiesList = '';
//     for (let j = 0; j < users[i].hobbies.length; j++) {
//         hobbiesList += `<li>${users[i].hobbies[j]}</li>`;
//     }
//     div.innerHTML += `
//     <h1>Name: ${users[i].name}</h1>
//     <h2>Age: ${users[i].age}</h2>
//     <ul>
//     ${hobbiesList}
//     </ul>
//     <hr/>
//     `
// }


// for(let i = 0; i < users.length; i++){
//     let hobbies = ''
//     for(let j = 0; j < users[i].hobbies.length; j++){
//         console.log(users[i].hobbies[j])
//         hobbies +=`<li>${users[i].hobbies[j]}</li>`
//     }
//     div.innerHTML += `
//     <h1>Name: ${users[i].name}</h1>
//     <h1>Age: ${users[i].age}</h1>
//     <h1>Hobbies</h1>
//     <ul>${hobbies}</ul>
//     <hr/>
//     `
// }