
const arr = [
    {name: "Zorro", age: 44},
    {name: "Shinji", age: 33},
    {name: "Astru", age: 22}
];

console.log(arr.sort((a, b) => {
    return  b.age - a.age;
}));