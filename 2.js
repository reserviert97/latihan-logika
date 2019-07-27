let print = '';

for (let i = 5; i >= 1; i--) {
  print = '';
  for (let j = 1; j <= i; j++) {
    print += '*';
  }
  console.log(print);
}
