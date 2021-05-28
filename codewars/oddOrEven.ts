export function oddOrEven(array: number[]) {
   const reduced_array = array.reduce((a, b) => a + b, 0);
   return reduced_array % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))
