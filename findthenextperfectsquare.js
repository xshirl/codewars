function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if (sq % Math.sqrt(sq) === 0) {
  return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1); 
  }
  else {
  return -1;
  }
}