
export function logout(axios) {
    return axios
        .post('/logout')
        .then(res => {
            window.location.href = '/login';
        })
        .catch(error => {
            console.log(error);
        });
}








