export const SignUp = ()=>{
    return fetch('/api/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
};