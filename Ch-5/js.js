
function sum() {
    return Array.prototype.slice.call(arguments).reduce((cumulator, next) => {
      return cumulator + next
    }, 0)
}
  
console.log(sum(1,3,45,5,5));
  

function sum() {
    let r = 0;
    
    for(let value of arguments) {
      r += value;
    }
    
    return r;
  }
  
  console.log(sum(1,3,45,5,5));
