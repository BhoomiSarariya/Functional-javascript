// function getShortMessages(messages) {
//     // SOLUTION GOES HERE
//     b={
//         message: 'Esse id amet quis eu esse aute officia ipsum.' // random
//       }
//       let c= filter(cc =>b.message.length <50)
//       console.log(c);
//   }
//   module.exports = getShortMessages;
module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }