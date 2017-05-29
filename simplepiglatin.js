function pigIt(str) {
  var words = str.split(' ');
  return words.map(function (word) {
    var letters = word.split(''),
        firstLetter = letters.shift();
    return letters.join('') + firstLetter + "ay";
  }).join(' ');
}