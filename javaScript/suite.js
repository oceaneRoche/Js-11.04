console.log("test js")
document.onreadystatechange = function () {
    console.log(document.readyState)
    if (document.readyState == 'interactive') {
        console.log("c'est ok")
        console.log(location.search)

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const login = urlParams.get('login');
        const password = urlParams.get('password');
        const loginLabel = document.createElement('label');
        loginLabel.textContent = 'Login: ' + login;
        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password: ' + password;
        const container = document.getElementById('container');
        container.appendChild(loginLabel);
        container.appendChild(document.createElement('br'));
        container.appendChild(passwordLabel);
    }
}