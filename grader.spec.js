// var getGrade = require('./grader');

// describe('get grade', function() {

//   it('should retun a letter grade', function() {
//     expect(getGrade(90)).toEqual('A');
//   });

//   it('should retun a letter grade', function() {
//     expect(getGrade(80)).toEqual('B');
//   });

//   it('should retun a letter grade', function() {
//     expect(getGrade(70)).toEqual('C');
//   });

//   it('should retun a letter grade', function() {
//     expect(getGrade(60)).toEqual('D');
//   });

//   it('should retun a letter grade', function() {
//     expect(getGrade(50)).toEqual('F');
//   });
// });


// var averageScore = require('./grader');

// describe('average score', function() {

//   it('should retun a percent', function() {
//     expect(averageScore([90, 95, 87, 60])).toEqual(83);
//   });

// });


//median
// var medianScore = require('./grader');

// describe('median score', function() {

//   it('should return the median', function() {
//     expect(medianScore([52,80,80, 80,86,94])).toEqual(80);
//   });

// });

//Mode
var modeScore = require('./grader');

describe('mode score', function() {

  it('should return the mode', function() {
    expect(modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });

});
