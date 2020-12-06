function palindrome(str) {
    var str = str.toLowerCase();
    var noSpaceStr = "";
    var reverseStr = "";
    var i = 0;

      while (i < str.length) {
        if (str.charAt(i) != " " && str.charAt(i) != "_" && str.charAt(i) != "-" && str.charAt(i) != "/" && str.charAt(i) != "\\" && str.charAt(i) != ":" && str.charAt(i) != "." && str.charAt(i) != ',' && str.charAt(i) != '(' && str.charAt(i) != ')') {
          noSpaceStr += str.charAt(i);
          i++;
        } else {
          i++;
        }
      }
  
      var i = noSpaceStr.length;
      
      while (i != 0) {
        reverseStr += noSpaceStr.charAt(i - 1);
        i -= 1;
      }
      
      if (noSpaceStr == reverseStr) {
        return true;
      } else {
        return false;
      }
  }
  
palindrome("eye");
  