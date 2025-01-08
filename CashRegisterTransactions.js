const currencies = [
    {currency: "ONE HUNDRED", value: 100},
    {currency: "TWENTY", value: 20},
    {currency: "TEN", value: 10},
    {currency: "FIVE", value: 5},
    {currency: "ONE", value: 1},
    {currency: "QUARTER", value: 0.25},
    {currency: "DIME", value: 0.1},
    {currency: "NICKEL", value: 0.05},
    {currency: "PENNY", value: 0.01}
  ]
  
  function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    change = Math.round(change * 100) / 100;
    let length = cid.length - 1;
    let returnObject = []
    let totalMoney = 0;

    while (length >= 0) {
        currencies.forEach(({currency, value}) => {
            totalMoney += cid[length][1];
            let currentCurrencyVal = cid[length][1];
            let totalCount = 0;
            while ( (change - value) >= 0) {
                if (currentCurrencyVal >= value) {
                    currentCurrencyVal -= value;
                    change -= value;
                    totalCount += value;
                    totalCount = Math.round(totalCount * 100) / 100;
                    change = Math.round(change * 100) / 100;
                    
                } else {
                    break;
                }
            }
            if (totalCount > 0) {
                returnObject.push([currency, totalCount]);
            }
            length--;
        });
    }
  
    if (cid === returnObject || totalMoney == (cash - price)) {
      return {status: "CLOSED", change: cid};
    }
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } 
  
    return {status: "OPEN", change: returnObject};
  }