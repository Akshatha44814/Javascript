const pr1 = new Promise((res, rej) => {
  setTimeout(res, 120, "queen");
});

const pr2 = new Promise((res, rej) => {
  setTimeout(rej, 10, "king");
});
const pr3 = new Promise((res, rej) => {
  setTimeout(res, 20, "servent");
});
const pr4 = new Promise((res, rej) => {
  setTimeout(res, 100, "prince");
});
Promise.any([pr1, pr2, pr3, pr4])
  .then((y) => {
    console.log(y);
  })
  .catch((e) => {
    console.log(e);
  });
//Returns only first resolved values from the promises.