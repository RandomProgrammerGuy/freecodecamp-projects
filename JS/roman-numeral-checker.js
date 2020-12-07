//Declaring arrays for Roman Numbers and their corresponding decimal equivilants
var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//This variable will be used to store the outcome of the conversion
var ans = '';

//Conversion Function
function convertToRoman(num) {
    for (var index = 0; index < decimals.length; index++) {
        while (decimals[index] <= num) {
        //Add and remove numbers from the conversion until the numbers match
        ans += romans[index];
         num -= decimals[index];
        }
      }
    return ans;
   }
   
   convertToRoman(300);
   