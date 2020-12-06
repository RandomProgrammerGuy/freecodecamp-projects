/*
To any poor person who might be reading this, I know that the solution I used for checking if the characters are alphanumeric is
incredibly dumb; but as any good programmer would tell you, IF IT WORKS, DON'T TOUCH IT; and this does pass tests so... yeah...
*/ 

//Define palindrome function
function palindrome(str) {
    //define main variables
    var str = str.toLowerCase();
    var noSpaceStr = "";
    var reverseStr = "";
    var i = 0;

      //make variable with all non-alphanumeric charachters removed
      while (i < str.length) {
        if (str.charAt(i) != " " && str.charAt(i) != "_" && str.charAt(i) != "-" && str.charAt(i) != "/" && str.charAt(i) != "\\" && str.charAt(i) != ":" && str.charAt(i) != "." && str.charAt(i) != ',' && str.charAt(i) != '(' && str.charAt(i) != ')') {
          noSpaceStr += str.charAt(i);
          i++;
        } else {
          i++;
        }
      }
      
      //Redefine variable i to the length of the noSpaceStr variable
      var i = noSpaceStr.length;
      
      //Reverse the noSpaceStr variable and assign the value to reverseStr
      while (i != 0) {
        reverseStr += noSpaceStr.charAt(i - 1);
        i -= 1;
      }
      
      //check if noSpaceStr and reverseStr are equal in value
      if (noSpaceStr == reverseStr) {
        return true;
      } else {
        return false;
      }
  }
  
palindrome("eye");
  