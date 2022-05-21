export const getProfile = async (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    const response = await fetch("https://dfssd-first.herokuapp.com/api/accounts/profile/5/", requestOptions)

    return response
};