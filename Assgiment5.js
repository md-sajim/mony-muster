// calculateButton fild
document
  .getElementById("calculateButton")
  .addEventListener("click", function incomeManesment() {
    const foodFild = document.getElementById("foodFild");
    const foodValu = foodFild.value;
    const rentFild = document.getElementById("rentFild");
    const rentValu = rentFild.value;
    const clothesFild = document.getElementById("clothesFild");
    const clothesValu = clothesFild.value;
    const totalCost =
      parseFloat(foodValu) + parseFloat(rentValu) + parseFloat(clothesValu);
    console.log(totalCost);
    const totalExpenses = document.getElementById("totalExpenses");
    totalExpenses.innerText = totalCost;
    const incomeFild = document.getElementById("incomeFild");
    const incomeValu = parseFloat(incomeFild.value);
    const netBalance = incomeValu - totalCost;
    console.log(netBalance);
    const carantbalance = document.getElementById("carantbalance");
    carantbalance.innerText = netBalance;
  });
// parent calculateButton fild
document.getElementById("saveButton").addEventListener("click", function () {
  const incomeFild = document.getElementById("incomeFild");
  const incomeValu = parseFloat(incomeFild.value);
  const saveParcant = document.getElementById("saveParcant");
  const parsentValu = parseFloat(saveParcant.value);
  const parsentAmount = incomeValu / 100;
  const carantSavein = parsentAmount * parsentValu;
  const carantSaveinValu = carantSavein;
  const saveAmount = document.getElementById("saveAmount");
  saveAmount.innerText = carantSavein;
  const prevasBalance = document.getElementById("carantbalance");
  const prevasBalanceValue = parseFloat(prevasBalance.innerText);
  const netCrantBlance = prevasBalanceValue - carantSaveinValu;
  const remainingBalance = document.getElementById("remainingBalance");
  remainingBalance.innerText = netCrantBlance;
});
