let print = '';

for (let i = 5; i >= 1; i--) {
  print = '';
  for (let j = 1; j <= 5; j++) {
    if (j >= i) {
      print += '*';
    } else {
      print += ' ';
    }
  }
  console.log(print);
}
