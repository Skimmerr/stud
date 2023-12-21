let year = 2019;

if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
  console.log(year + ' год - високосный');
}else{
  console.log(year + ' год - невисокосный')
}
