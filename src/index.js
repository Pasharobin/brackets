module.exports = function check(str, bracketsConfig) {

  let l = str.length;

  bracketsConfig.forEach(function (e) {
    str = str.replace(e[0] + e[1], "");
  });

  if (str.length == 0) {
    return true;
  }
  else
  if (str.length == l) {
    return false;
  }
  else
  return check(str, bracketsConfig);

}
