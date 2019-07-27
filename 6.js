countArkaDiscount = price => {
  if (price >= 50000) {
    let discount = price * 0.5;
    discount = discount > 50000 ? 50000 : discount;
    return (price -= discount);
  }
  return price;
};

countDemyDiscount = price => {
  if (price >= 25000) {
    let discount = price * 0.6;
    discount = discount > 30000 ? 30000 : discount;
    return (price -= discount);
  }
  return price;
};

shippingCost = distance => {
  let cost = 0;
  if (distance <= 1.5) {
    return (cost = 5000);
  }
  distance = Math.ceil(distance - 1.5);
  cost = distance * 3000 + 5000;
  return cost;
};

arkaFood = (price, voucher = false, distance, tax = false) => {
  let total = 0;
  if (voucher == 'ARKAFOOD5') {

    total = countArkaDiscount(price) + shippingCost(distance);
    if (tax) {
      tax = price * 0.05;
      return total + tax;
    }
    return total;
  } else if (voucher == 'DITRAKTIRDEMY') {
    total = countDemyDiscount(price) + shippingCost(distance);

    if (tax) {
      tax = price * 0.05;
      return total + tax;
    }

    return total;
  } else {
    total = price + shippingCost(distance);
    if (tax) {
      tax = price * 0.05;
      return total + tax;
    }
    return total;
  }
};

console.log(arkaFood(75000, 'ARKAFOOD5', 5, false));
console.log(arkaFood(25000, 'DITRAKTIRDEMY', 7, true, 'HASIL AKHIR'));
