function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 4000);
  });
}

async function resSoma(a, b, c) {
  let x = await somaComDelay(a, b);
  let y = c;
  return x + y;
}

resSoma(1, 2, 3)
  .then((value) => console.log(value))
  .catch((err) => console.error(err));
