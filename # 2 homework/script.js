const users = [
    {name:'Temo',   age:25},
    {name:'Lasha',  age:21},
    {name:'Ana',    age:28}
];

let newUser = users.sort((a,b)=>{return a.age-b.age});

console.log(newUser[0].name)
