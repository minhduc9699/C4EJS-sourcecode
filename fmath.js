// function checkAnswer(dice, answer, score) {
//   if (dice < 0.5) {
//     if (answer == "T") {
//       return score + 1
//     } else {
//       return score - 1
//     }
//   } else {
//     if (answer == "T") {
//       return score - 1
//     } else {
//       return score + 1
//     }
//   }
// }

// function generateQuiz(dice) {
//   let a = Math.floor(Math.random() * 10) // random number
//   let b = Math.floor(Math.random() * 10)
//   let c = Math.floor((Math.random() + 1) * 2)
//   let res = a + b
//   if (dice < 0.5) {
//     console.log(`${a} + ${b} = ${res}`) // show quiz
//   } else {
//     console.log(`${a} + ${b} = ${res + c}`)
//   }
// }


// let score = 0
// let playing = true
// for(let i = 0; playing; i+=1) {
//   let dice = Math.random()
//   generateQuiz(dice) 
//   let answer = prompt('T/F?')
//   if (answer == 'exit') {
//     playing = false
//   } else {
//     score = checkAnswer(dice, answer, score)
//     console.log(score)
//   }
// }


// function filterOdd(array) {
//   let newArray = []
//   for(let i = 0; i < array.length; i+=1) {
//     if (array[i] % 2 == 0) {
//       newArray.push(array[i])
//     }
//   }
//   return newArray
// }


// let res = filterOdd([1,3,5,7,9])
// console.log(res)
// console.log(filterOdd([2,4,5,3,8,3,2]))