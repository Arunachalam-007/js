/* eslint-disable semi */
/*eslint-disable*/
export function myFunction() {
  var currency = document.getElementById("amt");
  var result = "$" + parseInt(Math.ceil(Math.random() * 200) * currency.value);
  document.getElementById("result").innerHTML = result;
}
