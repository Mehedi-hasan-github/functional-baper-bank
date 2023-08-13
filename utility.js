function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldStr = inputField.value;
  const inputFieldValue = parseFloat(inputFieldStr);
  inputField.value = "";
  return inputFieldValue;
}
function getElementFieldValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldStr = elementField.innerText;
  const elementFieldValue = parseFloat(elementFieldStr);
  return elementFieldValue;
}
function getAndSetBalanceTotalValueById(balanceId, totalValue) {
  const balanceField = document.getElementById(balanceId);
  balanceField.innerText = totalValue;
}
