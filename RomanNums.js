let romanNumber = '';

const RomanNumeralsDef = [
  {romanNum: "M", value: 1000},
  {romanNum: "CM", value: 900},
  {romanNum: "D", value: 500},
  {romanNum: "CD", value: 400},
  {romanNum: "C", value: 100},
  {romanNum: "XC", value: 90},
  {romanNum: "L", value: 50},
  {romanNum: "XL", value: 40},
  {romanNum: "X", value: 10},
  {romanNum: "IX", value: 9},
  {romanNum: "V", value: 5},
  {romanNum: "IV", value: 4},
  {romanNum: "I", value: 1}
];

function convertToRoman(num) {
  if (num == 0) {
    const returnRoman = romanNumber;
    romanNumber = '';
    return returnRoman;
  }

  let i = 0;
  while (i < RomanNumeralsDef.length) {
    if (num >= RomanNumeralsDef[i].value) {

      romanNumber += RomanNumeralsDef[i].romanNum;

      return convertToRoman(num - RomanNumeralsDef[i].value)
    }
    i++;
  }

}