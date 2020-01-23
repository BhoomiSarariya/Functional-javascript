 function repeat(operation, num) {
    if (num >= 0) {
        num--;
        operation()
        repeat(operation,num);
    }
    else{
        return 0;
    }
}
  module.exports = repeat;