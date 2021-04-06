
String.prototype.multi = function(n) {
    var r = '';
    for(let i = 0; i < n; i++) {
        r = r + this + ' ';
    }
    return r.trim();
}

console.log("str".multi(3));
