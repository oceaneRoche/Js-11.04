console.log("test js")
document.onreadystatechange = function () {
    console.log(document.readyState)
    if (document.readyState == 'interactive') {
        console.log("c'est ok")
        const loginInput = document.getElementById('login');
        const passwordInput = document.getElementById('password');
        const submitButton = document.getElementById('submit');
        function updateSubmitButtonState() {
            if (loginInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        }
        loginInput.addEventListener('input', updateSubmitButtonState);
        passwordInput.addEventListener('input', updateSubmitButtonState);
    }
}