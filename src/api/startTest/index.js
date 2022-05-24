export const StartTest = (link, indx) => {
    const getAccess = localStorage.getItem('acces');
    const token = (JSON.parse(getAccess).access)

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: formdata,
    redirect: 'follow'
    };

    fetch(`https://dfssd-first.herokuapp.com/api/test/${link}/questions/1/`, requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .then(result => localStorage.setItem('question', result))
        .catch(error => console.log('error', error));
}