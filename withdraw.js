document.getElementById("withdrawbtn").addEventListener("click", function () {
  // get withdraw inputValue //
  const inputValueTotal = getInputFieldValueById("withdrawInput");
  // get withdraw ElementValue //
  const elementValueTotal = getElementFieldValueById("withdrawTotal");
  // get total value //
  const withdrawTotal = inputValueTotal + elementValueTotal;
  getAndSetBalanceTotalValueById("withdrawTotal", withdrawTotal);

  //   get balance Total  //
  const balanceValueTotal = getElementFieldValueById("balanceTotal");
  const newBalanceTotal = balanceValueTotal - inputValueTotal;
  getAndSetBalanceTotalValueById("balanceTotal", newBalanceTotal);
});
