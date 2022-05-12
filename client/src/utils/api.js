export const addUser = (user)=>{
    console.log(user,"inside fetch")
    return fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
};