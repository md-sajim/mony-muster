// Problem.1
function anaToVori(ana) {
  if (typeof ana != "number") {
    return "Plese gave a number";
  }
  if (ana < 0) {
    return "Please gave a positive number up greater then 0.";
  }
  let Vori = ana / 16;
  return Vori;
}
let totalGold = anaToVori(32);
console.log(totalGold);
// Problem.2
function pandaCost(sengaraQuantity, chomucaQnantity, zelabeQuantity) {
  if (typeof sengaraQuantity != "number") {
    return "Plese gave a number";
  }
  if (typeof chomucaQnantity != "number") {
    return "plese gave a number";
  }
  if (typeof zelabeQuantity != "number") {
    return "plese gave a number";
  }
  if (sengaraQuantity < 0 || chomucaQnantity < 0 || zelabeQuantity < 0) {
    return "Please gave a positive number up greater then 0";
  }
  let sengarapric = 7 * sengaraQuantity;
  let comucapric = 10 * chomucaQnantity;
  let zelabepric = 15 * zelabeQuantity;
  let totalPric = sengarapric + comucapric + zelabepric;
  return totalPric;
}
const totoBuy = pandaCost(2, 3, 4);
console.log(totoBuy);
//problem.3
function picnicBudget(peoples) {
  if (typeof peoples != "number") {
    return "Plese gave a number";
  }
  if (peoples < 0) {
    return "Please gave a positive number up greater then 0.";
  }
  const frist100peoples = 5000;
  const second100peoples = 4000;
  const threadUp200peoples = 3000;
  if (peoples <= 100) {
    const budgetfrist100 = peoples * frist100peoples;
    return budgetfrist100;
  } else if (peoples <= 200) {
    const budgetfrist100 = 100 * frist100peoples;
    const coundadPeoples = peoples - 100;
    const budgetsecond100 = coundadPeoples * second100peoples;
    const totalcost = budgetfrist100 + budgetsecond100;
    return totalcost;
  } else {
    const budgeyfrist100 = 100 * frist100peoples;
    const budgetsecond100 = 100 * second100peoples;
    const secondcoundedpeople = peoples - 200;
    const Upto200peoples = secondcoundedpeople * threadUp200peoples;
    const totalcost = budgeyfrist100 + budgetsecond100 + Upto200peoples;
    return totalcost;
  }
}
const budget = picnicBudget(300);
console.log(budget);
//problem.4
let names = ["kaju", "sajim", "thohin"];
function oddFriend(frindName) {
  for (let i = 0; i < frindName.length; i++) {
    let oddNumFrind = frindName[i];
    const num = oddNumFrind.length;
    if (num % 2 == 1) {
      return oddNumFrind;
    }
  }
}
let totalodd = oddFriend(names);
console.log(totalodd);
