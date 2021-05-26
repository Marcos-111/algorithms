 function generateShape(int) {
  for(let i = 0; i < int; i++){
   return ("+".repeat(int) + " /n ").repeat(int)
 }
}

console.log(generateShape(3))
console.log(generateShape(5))
