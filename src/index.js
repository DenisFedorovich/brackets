module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 != 0) return false;

  let array = str.split('');
  let newarr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {

      if (array[i] === bracketsConfig[j][1]) {

        if (newarr[newarr.length - 1] === j) {
          newarr.pop(j);
          break;

        } else if (array[i] === bracketsConfig[j][0]) {

          newarr.push(j);
          break;

        } else {

          return false;

        }

      } else if (array[i] === bracketsConfig[j][0]) {

        newarr.push(j);
        break;

      }
    }
  }

  if (newarr.length === 0) {
    return true
  } else return false;
  
}
