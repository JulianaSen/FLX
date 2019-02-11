function reverseNumber(num) {
  let n = num.toString();
  let reversed = "";  
  if(n[0] === "-") {
    reversed += n[0];
    for (var i = n.length - 1; i >= 1; i--) {
      reversed += n[i];
    }   
  } else {
    for (var j = n.length - 1; j >= 0; j--) {
      reversed += n[j];
    }   
  }
  return parseInt(reversed);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(100000);