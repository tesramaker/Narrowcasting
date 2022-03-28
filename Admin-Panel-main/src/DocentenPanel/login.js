function checkCredentials() {
    let userName = document.getElementById("userName").value;
    let passWord = document.getElementById("password").value;
    document.getElementById("showUsername").innerHTML = userName;
    document.getElementById("showPassword").innerHTML = passWord;
    // let request = new XMLHttpRequest()
    // request.open('POST', 'http://localhost:8080/Api_war/authenticate', true)

    const data = { username: userName, password: passWord };
    fetch('http://localhost:8080/Api_war/authenticate', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Succes:', data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    // data = JSON.parse(json);
    // console.log(data.username);
    // console.log('hallo');
    // request.onload = function () {
    //     console.log("Hier kom ik");
    // }
    // request.send();
}