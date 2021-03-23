
function func(x){
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}


console.log(func(3)(2)(1));


var arr = ['test', () => 10, 100];

console.log(  arr[1]()    );

// algo

function mapStr(str) {
    let obj = {
        name: 'z',
        name: 'a'
    };
    let temp = str.split('');
    
    // console.log(temp)

    for(let i = 0; i < temp.length; i++) {
        if(!(temp[i] === ' ')) {
            if(obj[temp[i]]) {
                obj[temp[i]] = obj[temp[i]] + 1
            } 
            else {
                obj[temp[i]] = 1
            }
        }
    }

    return obj;
}
console.log(mapStr(' adhagd asfjkhaf afjnhss' ));

var a = [{"name": "Zorro", "age": 33}, {"name": "Astru", "age": 66}]

var newObj = {};
for (let i = 0; i < a.length; i++) {

    const k = Object.keys(a[i])[1]

    newObj[`${a[i].name}`] = {
        [k]: a[i].age
    };
    console.log()

}

console.log(newObj);



