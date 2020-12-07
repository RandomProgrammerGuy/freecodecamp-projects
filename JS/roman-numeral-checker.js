var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var ans = '';

function convertToRoman(num) {
    for (var index = 0; index < decimals.length; index++) {
        while (decimals[index] <= num) {
          ans += romans[index];
          num -= decimals[index];
        }
      }
    return ans;
   }
   
   console.log(convertToRoman(300));
   