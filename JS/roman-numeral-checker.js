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
        if (num <= 10) {        
            one = switchTen(num);
        }

        if (num > 10 && num <= 20) {
            tenth = 'X'
            one = String(switchTen(num - 10))
        }

        if (num > 20 && num <= 30) {
            tenth = 'XX'
            one = String(switchTen(num - 20))
        }

    var ans = tenth + one;
    return ans;
}
   
   console.log(convertToRoman(13));