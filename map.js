function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var res = [];
     numbers.map((num)=>{
    res.push(num*2);
     })
     return res;
}
  
  module.exports = doubleAll;
