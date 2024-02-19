function convertToRoman(num) {
   var romanNumeralMap = [
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
   ];

   var result = '';

   for (var i = 0; i < romanNumeralMap.length; i++) {
      var [roman, value] = romanNumeralMap[i];

      while (num >= value) {
         result += roman;
         num -= value;
      }
   }

   return result;
}

// function convertToRoman(num) {
//   	const obj = {
//       0:['M',1000], 
//       1:['D', 500], 
//       2:['C', 100], 
//       3:['L', 50], 
//       4:['X', 10], 
//       5:['V', 5], 
//       6:['I', 1]
//     };

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
