
for(var i = 0; i < 5; i++) {
    setTimeout((function(1) {
        console.log('i: ', i)
    })(i), 0);
}

function upperText(str) {
    const arr = str.split(' ');
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        const first = arr[i][0].toUpperCase();
        const rest = arr[i].substr(1);
        result.push(first + rest);
    }

    return result.join(' ');
}

console.log(upperText('Ana are mere, Viorel vine si cere'))
