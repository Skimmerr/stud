let morningList = [
    'Встать с кровати',
    'Почистить зубы',
    'Проверить сториз в Инстаграме',
    'Позавтракать'
  ];
  
  morningList[2] = 'Сделать зарядку';
  morningList[4] = 'Помыть посуду';
  
  console.log(morningList[0]); // Выведите первый элемент
  console.log(morningList[3]); // Выведите последний элемент
  
  for (let tasks of morningList){
    console.log(tasks);
  };

  for (let i = 0; i <= 3; i+=2){
    console.log(morningList[i])
  }

  let ii = 0
  while (ii <= 3) {
    console.log(morningList[ii]);
    ii ++;
  }