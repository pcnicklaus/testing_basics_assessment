// function getGrade(grade) {
//   if (grade >= 90) {
//     return 'A';
//   } else if (grade >= 80) {
//     return 'B';
//   } else if (grade >= 70) {
//     return 'C';
//   } else if (grade >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// function averageScore (array) {
//   var total = 0;
//   for (var i = 0; i< array.length; i++) {
//     total += array[i];
//   }
//   return total / array.length;
// }


// MEDIAN SCORE
// function medianScore (array) {
//   array.sort();
//   var arrayLength = array.length;
//   var halfArray = array.length / 2;
//   console.log(arrayLength);
//   console.log(halfArray);
//   var median = '';
//   if (arrayLength % 2 !== 0) {
//     median = halfArray - .5;
//     return array[median];
//   } else {
//     return ( (array[halfArray] + array[halfArray-1]) /2 );
//   }

// }

// medianScore([52,80,80,86,94])




// Write a function `modeScore` which takes an array of test scores and calculates the mode score.  The mode is the value that appears most often.

// ```
// modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
// //=> 92


//MODE SCORE
function modeScore (array) {
  var sortedArray = array.sort();
  var answer = 0;
  for (var i = 0; i < sortedArray.length; i++) {
    answer = sortedArray[i];
    if (answer === sortedArray[i+1]) {
      return answer;
    }
  }

}

// module.exports = getGrade;
// module.exports = averageScore;
// module.exports = medianScore;
module.exports = modeScore;
