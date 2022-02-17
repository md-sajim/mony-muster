document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
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
    const saveParcant = document.getElementById("saveParcant");
    const parsentValu = parseFloat(saveParcant.value);
    const parsentAmount = incomeValu / parsentValu;
    console.log(parsentAmount);
  });
