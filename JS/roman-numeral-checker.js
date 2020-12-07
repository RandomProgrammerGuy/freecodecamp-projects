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
    if (num <= 10) {        
            var ans = switchTen(num);
            return ans;
        }

    if (num > 10 && num <= 20) {
        num -= 10
        switch (num){
            case 1:
                return 'XI';
            case 2:
                return 'XII';
            case 3:
                return 'XIII';
            case 4:
                return 'XIV';
            case 5:
                return 'XV';
            case 6:
                return 'XVI';
            case 7:
                return 'XVII';
            case 8:
                return 'XVIII';
            case 9:
                return 'XIX'
            case 10:
                return 'XX'
        }
    }
}
   
   
   console.log(convertToRoman(2));