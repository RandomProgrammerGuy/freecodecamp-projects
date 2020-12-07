var decimals = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    2000,
    3000
]

var romans = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    'M',
    'MM',
    'MMM'
]

function convertToRoman(num) {
    for (var index = 0; index < decimals.length; index++) {
        while (decimals[index] <= num) {
          romanized += romans[index];
          num -= decimals[index];
        }
      }
    return num;
   }
   
   console.log(convertToRoman(2));
   