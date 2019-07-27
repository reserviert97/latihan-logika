countVowels = input => {
  let vowels = 0;
  const array = input.split('');
  array.forEach(element => {
    if (
      element == 'a' ||
      element == 'i' ||
      element == 'u' ||
      element == 'e' ||
      element == 'o'
    ) {
      return (vowels = vowels + 1);
    }
  });

  return console.log(`total Vowels = ${vowels}`);
};

countVowels('programmer');
