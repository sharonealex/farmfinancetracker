export const addUser = (user) => {
  console.log(user, "inside fetch");
  return fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const loginUser = (user) => {
  return fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
};


// export const clockHours = (hour)=>{
//   return fetch("/api/time", {
//     method: "POST",
//     body: JSON.stringify(hour),
//     headers: {'Content-Type': 'application/json'}
//   })
// }