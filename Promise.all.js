const p1 = new Promise((res, rej) => {
  setTimeout(res, 10, "queen");
});
const p2 = new Promise((res, rej) => {
  setTimeout(res, 210, "king");
});
const p3 = new Promise((res, rej) => {
  setTimeout(res, 130, "servent");
});
const p4 = new Promise((res, rej) => {
  setTimeout(res, 410, "prince");
});
Promise.all([p1, p2, p3, p4])
  .then((z) => {
    console.log(z, "res");
  })
  .catch((er) => {
    console.log(er, "rej");
  });

const p5 = new Promise((res, rej) => {
  setTimeout(res, 10, "queen");
});
const p6 = new Promise((res, rej) => {
  setTimeout(res, 210, "king");
});
const p7 = new Promise((res, rej) => {
  setTimeout(res, 130, "servent");
});
const p8 = new Promise((res, rej) => {
  setTimeout(rej, 410, "prince");
});
Promise.all([p5, p6, p7, p8])
  .then((z) => {
    console.log(z, "res");
  })
  .catch((er) => {
    console.log(er, "rej");
  });
