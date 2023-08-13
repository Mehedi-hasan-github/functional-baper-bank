document.getElementById("depositbtn").addEventListener("click", function () {
  // get deposit inputValue //
  const inputValueTotal = getInputFieldValueById("depositInput");
  // get deposit ElementValue //
  const elementValueTotal = getElementFieldValueById("depositTotal");
  // get total value //
  const depositTotal = inputValueTotal + elementValueTotal;
  getAndSetBalanceTotalValueById("depositTotal", depositTotal);

  //   get balance Total  //
  const balanceValueTotal = getElementFieldValueById("balanceTotal");
  const newBalanceTotal = balanceValueTotal + inputValueTotal;
  getAndSetBalanceTotalValueById("balanceTotal", newBalanceTotal);
});
