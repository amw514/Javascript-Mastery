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
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
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
    const id = res.data[0].id;
    fakeRequest(`/users/${id}`).then((res) => {
      const postID = res.data.topPostId;
      fakeRequest(`/posts/${postID}`).then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log("Status Code", err.status);
  });
