const users = [
    {
        id:1,
        name:"John",
        isActive:true,
        age:30
    },
    {
        id:2,
        name:"sena",
        isActive:true,
        age:34
    },
    {
        id:3,
        name:"Wick",
        isActive:false,
        age:25
    }

]

// solution 1
const names = [];
// for(let i = 0; i < users.length; i++){
//     if(users[i].isActive)
//     names.push(users[i].name)
// }

// console.log(names);

// solution 2
// users.forEach((user)=>{
    // names.push(user.name);
// })

// console.log("names -->",names);


// solution 4
const newNames = [];
const filteresData = users.filter(user => user.isActive).map((user)=> user.name);
// console.log(users);
console.log(filteresData);