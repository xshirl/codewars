function longestConsec(strarr, k) {
  let str = '';
  if (k <= 0)
    return str;
  for (let i = 0; i < strarr.length-k+1; i++) /* n-k+1 blocks of k elements */
  {
    let temp = strarr.slice(i, i+k).join(''); /* joins first k elements, then next k elements until i < n-k+1 */
    if (str.length < temp.length)
      str = temp;
  }
  return str;
}