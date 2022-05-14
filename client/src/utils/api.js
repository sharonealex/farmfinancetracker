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

export const saveHours = (profile, hour)=>{
  console.log(profile.data.email)
  return fetch("/api/user/timesheet", {
    method: "POST",
    body: JSON.stringify({email: profile.data.email, time: hour}),
    headers: {'Content-Type': 'application/json'}
  })
}


