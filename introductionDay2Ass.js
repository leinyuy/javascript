/*  
Assignment to showcase tomorrow
Write a JavaScript function to generate a random string of n characters.

Example: if n = 10, then output maybe = xyA17gaW@0
*/
function generatorString(n) {
  const characters =
    "abcdefghijklmnopqrstuvwxyz123456789=_+)(*)*&^%$#@!~'\";:/?.>,<|";
  let randomString = "";

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}
console.log(generatorString(10));
