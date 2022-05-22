//TODO: Count sum of even and odd index of array and compare
{
  const isEvenIndexSumGreater = (arr) => {
    let result = 0;
    arr.forEach((val, ind) => (ind % 2 ? (result -= val) : (result += val)));
    return result > 0;
  };
}

//TODO: Get square positive numbers from array
{
  function getSquarePositiveIntegers(array) {
    return array.filter((val) => val > 0 && Number.isInteger(val)).map((val) => val ** 2);
  }
}

//TODO: Get MIN banknotes from ATM
{
  function getBanknoteList(amountOfMoney) {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let minBanknotes = [];

    for (const banknote of banknotes) {
      if (!amountOfMoney) {
        break;
      } else if (amountOfMoney >= banknote) {
        let banknoteList = Math.floor(amountOfMoney / banknote);
        amountOfMoney = amountOfMoney - banknoteList * banknote;
        while (banknoteList--) {
          minBanknotes.push(banknote);
        }
      }
    }
    return minBanknotes;
  }
}
