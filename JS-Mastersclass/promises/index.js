// const willGetDog = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   console.log(randomNumber);

//   if (randomNumber < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetDog
//   .then(() => {
//     console.log("Yay We Got A Dog!!!!");
//   })
//   .catch(() => {
//     console.log("No unfortunately");
//   });

// console.log("1");
// console.log("2");
// console.log("3");

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       console.log(randomNumber);

//       if (randomNumber < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// };

// makePromise()
//   .then(() => {
//     console.log("Yay We Got A Dog!!!!");
//   })
//   .catch(() => {
//     console.log("No unfortunately");
//   });

// console.log("4");
// console.log("5");

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmeralda" },
        ],
        "/about": "This is about page!",
      };

      const data = pages[url];

      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status Code", res.status);
    console.log("Data", res.data);
    console.log("Request Worked");
  })
  .catch((res) => {
    console.log("Status Code", res.status);
  });
