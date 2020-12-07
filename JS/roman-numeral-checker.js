function switchTen(inp) {
    switch (inp){
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VIII';
        case 9:
            return 'IX';
        case 10:
            return 'X';
    }
}   

function convertToRoman(num) {
    var one = '';
    var tenth = '';
    var hundredth = '';
    var thousand = '';

        if (num <= 10) {        
            one = switchTen(num);
        }

        if (num > 10 && num <= 20) {
            tenth = 'X'
            one = String(switchTen(num - 10))
        }

        if (num > 20 && num <= 30) {
            tenth = 'XX';
            one = String(switchTen(num - 20));
        }

        if (num > 30 && num <= 40) {
            tenth = 'XXX';
            one = String(switchTen(num - 30));
        }

        if (num > 40 && num <= 50) {
            tenth = 'XL';
            one = String(switchTen(num - 40));
        }

        if (num > 50 && num <= 60) {
            tenth = 'L';
            one = String(switchTen(num - 50));
        }

        if (num > 60 && num <= 70) {
            tenth = 'LX';
            one = String(switchTen(num - 60));
        }

        if (num > 70 && num <= 80) {
            tenth = 'LXX';
            one = String(switchTen(num - 70));
        }

        if (num > 80 && num <= 90) {
            tenth = 'LXXX';
            one = String(switchTen(num - 80));
        }

        if (num > 90 && num <= 100) {
            tenth = 'XC';
            one = String(switchTen(num - 90));
        }

        if (num > 100 && num <= 110) {
            tenth = 'C';
            one = String(switchTen(num - 40));
        }

    var ans = thousand + hundredth + tenth + one;
    return ans;
}
   
   console.log(convertToRoman(27));