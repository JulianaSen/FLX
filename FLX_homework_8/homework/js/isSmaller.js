function isBigger(arg1, arg2) {
  return arg1 > arg2;
}

function isSmaller(arg1, arg2) {
  return isBigger(arg2, arg1);
}

isSmaller(5, -1);