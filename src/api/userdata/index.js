export const getProfile = async () => {
    const getAccess = localStorage.getItem('acces');
    const token = (JSON.parse(getAccess).access)

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    const response = await fetch("https://dfssd-first.herokuapp.com/api/accounts/profile/", requestOptions)

    return response
};


// var myHeaders = new Headers();
// myHeaders.append("Authorization", `Bearer ${token}` );

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };

// fetch("https://dfssd-first.herokuapp.com/api/accounts/profile/5/", requestOptions)
//     .then(response => response.text())
//     // .then(result => console.log(result))
//     .then(result => localStorage.setItem('userData', result))
//     .catch(error => console.log('error', error));
// }