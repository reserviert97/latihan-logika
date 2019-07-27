splitCharacter = input => {
  const array = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < input.length; j++) {
      let char = input.slice(j, j + array[i].length);
      if (char == array[i]) {
        result.push(char);
      }
    }
  }
  return console.log(result);
};

splitCharacter('programit');
