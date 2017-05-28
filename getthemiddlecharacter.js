function getMiddle(s) {
  if (s.length % 2 === 0) {
    var res = s.charAt(s.length / 2 - 1);
    var trp = s.charAt(s.length / 2);
    var arg = res.concat(trp);
   return arg;
}
  else {
    var his = s.charAt((s.length - 1) / 2);
    return his;
  }
}   