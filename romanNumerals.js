function toRomanLazy(num) {

  let output = "";
  let romanNumeralToArabic = { 
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
  }

  let romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  for (let symbol of romanNumeralPriorityOrder) {
      const value = romanNumeralToArabic[symbol];
      const times = Math.floor(num / value);

      output += symbol.repeat(times);
      num -= times * value;
  }
  return output;
}

function toRoman(num) {
  let output = "";
  let romanNumeralToArabic = {
    I : 1,
    IV : 4,
    IX : 9,
    V : 5,
    X : 10,
    XL : 40,
    L : 50,
    XC : 90,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000
  }

  let romanNumeralPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let symbol of romanNumeralPriorityOrder) {
    const value = romanNumeralToArabic[symbol];
    const times = Math.floor(num / value);

    output += symbol.repeat(times);
    num -= times * value;
  }
  return output;

}

module.exports = { toRoman, toRomanLazy };
