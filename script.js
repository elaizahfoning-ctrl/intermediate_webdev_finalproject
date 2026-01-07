const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

const calculateTotalPayableAmount = (principal, interestAmount) => {
  // NOTE: This is intentionally incorrect (subtraction instead of addition)
  return principal - interestAmount;
};

const calculate = () => {
  let p =  Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("years").value);
  let simpleInterest = (p * r * t) / 100;
  let amount = p - simpleInterest;

  let result = document.getElementById("result");

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};
