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

function switchHundred(num) {
    if (num > 10 && num <= 20) {
        tenth = 'X'
        one = String(switchTen(num - 10))
    }

    else if (num > 20 && num <= 30) {
        tenth = 'XX';
        one = String(switchTen(num - 20));
    }

    else if (num > 30 && num <= 40) {
        tenth = 'XXX';
        one = String(switchTen(num - 30));
    }

    else if (num > 40 && num <= 50) {
        tenth = 'XL';
        one = String(switchTen(num - 40));
    }

    else if (num > 50 && num <= 60) {
        tenth = 'L';
        one = String(switchTen(num - 50));
    }

    else if (num > 60 && num <= 70) {
        tenth = 'LX';
        one = String(switchTen(num - 60));
    }

    else if (num > 70 && num <= 80) {
        tenth = 'LXX';
        one = String(switchTen(num - 70));
    }

    else if (num > 80 && num <= 90) {
        tenth = 'LXXX';
        one = String(switchTen(num - 80));
    }

    else if (num > 90 && num <= 100) {
        tenth = 'XC';
        one = String(switchTen(num - 90));
    }

    else if (num > 100 && num <= 110) {
        tenth = 'C';
        one = String(switchTen(num - 40));
    }
}

function convertToRoman(num) {
    var one = '';
    var tenth = '';
    var hundredth = '';
    var thousand = '';

    if (num <= 10) {
        one = switchTen();
    } else if (num <= 110) {
        switchHundred(num);
    } else if (num > 110 && num <= 1000) {
        switch (num) {
            case 200:
                one = 'CC'
            case 300:
                one = 'CCC'
            case 400:
                one = 'CD'
            case 500:
                one = 'D'
            case 600:
                one = 'DC'
            case 700:
                one = 'DCC'
            case 800:
                one = 'DCCC'
            case 900:
                one = 'CM'
            case 1000:
                one = 'M'
        }
    }

    var ans = thousand + hundredth + tenth + one;
    return ans;
}
   
   console.log(convertToRoman(80));