function friend(friends){
  var result = []; //creates empty array to be pushed into
  for (var i = 0; i < friends.length; i++) {
     if (friends[i].length === 4) {
     result.push(friends[i]);
} /* if length of ith element of friends equals four, push that element into empty array */
}
return result; // return array with names that are four letters long
}