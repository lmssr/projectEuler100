function largeSum(arr) {
  let sum = arr.reduce((total, item) => total + Number(item), 0);   // 8.348422521139211e+49
  let str = sum.toString().split('e')[0];   // '8.348422521139211'
  return 1000000000 * str.slice(0,11);   // 8348422521
}
const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];
largeSum(testNums);
