/*=====================income input Variabole
 *******************************************/
// const foodFiled = document.getElementById("inputFoodAmount");
// const rentFiled = document.getElementById("inputRentAmount");
// const clothesFiled = document.getElementById("inputClothesAmount");
/*======================Calculate Button
 ****************************************/
const calculateBtn = document.getElementById("calculateButton");
/*======================Total Expenses
 ***************************************/

/*====================== Corent Balance
 ***************************************/
// const carantbalance = document.getElementById("carantbalance");
/*==========Saveing Section============*/
/*==========Saveing Button=============*/
const saveingBtn = document.getElementById("saveButton");
/*===============save input=============*/
// const saveInputField = document.getElementById("inputSaving");
/*==============Saving Amount==========*/
// const saveAmountFild = document.getElementById("saveAmount");
/*==============Remaining Balance=====*/
const netBalance = document.getElementById("remainingBalance");

/*********************************************
                Start 
*********************************************/
function inputvalu(idinbox) {
  let inputbox = document.getElementById(idinbox);
  let inputValueAmount = parseFloat(inputbox.value);
  if (isNaN(inputValueAmount) || inputValueAmount < 0) {
    inputbox.value = "";
    return alert("একটি সঠিক ইনপুট দিন");
  }
  inputbox.value = "";
  return inputValueAmount;
}
function inputIncomeAmount(idinbox) {
  let inputbox = document.getElementById(idinbox);
  let inputValueAmount = parseFloat(inputbox.value);
  if (isNaN(inputValueAmount) || inputValueAmount < 0) {
    inputbox.value = "";
    return alert("একটি সঠিক ইনপুট দিন");
  }

  return inputValueAmount;
}
calculateBtn.addEventListener("click", function () {
  const foodFild = inputvalu("inputFoodAmount");
  const rentFild = inputvalu("inputRentAmount");
  const clothesFild = inputvalu("inputClothesAmount");
  const totalCost = foodFild + rentFild + clothesFild;
  const totalExpenses = document.getElementById("totalExpenses");
  totalExpenses.innerText = totalCost;
  console.log(totalCost);
  /////////////////////////////////////////////
  const incomeFild = inputIncomeAmount("inputIncomeAmount");
  if (incomeFild < totalCost) {
    return alert("অপনার পযাপ্ত বেলেঞ নেই।");
  }
  const netBalance = incomeFild - totalCost;
  console.log(netBalance);
  const carantbalance = document.getElementById("carantbalance");
  carantbalance.innerText = netBalance;
});
saveingBtn.addEventListener("click", function () {
  const saveinField = inputvalu("inputSaving");
  /////////////////////////////////////////////
  const incomeFild = inputvalu("inputIncomeAmount");
  if (incomeFild < saveinField) {
    return alert("অপনার পযাপ্ত বেলেঞ নেই।");
  }
  const incomeCalculation = incomeFild / 100;
  const savingValue = incomeCalculation * saveinField;
  console.log(savingValue); ///////////
  ///////////////////////
  const saveAmount = document.getElementById("saveAmount");
  saveAmount.innerText = savingValue;
  const prevasBalance = document.getElementById("carantbalance");
  const prevasBalanceValue = parseFloat(prevasBalance.innerText);
  const netCrantBlance = prevasBalanceValue - savingValue;
  const remainingBalance = document.getElementById("remainingBalance");
  remainingBalance.innerText = netCrantBlance;
});
