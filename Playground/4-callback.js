// setTimeout(() => {
//   console.log("2000 seconds are up");
// }, 2000);

// const names = ["andrew", "jen", "kevin"];

// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// const data = geocode("rewari", (data) => {
//   console.log(data);
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    sum = a + b;
    callback(sum);
  }, 2000);
};

const result = add(1, 4, (sum) => {
  console.log(sum);
});
