document.getElementById('login-button').addEventListener('click', function () {

    const inputEmail = document.getElementById('input-emil');
    const emamiFild = inputEmail.value;
    const inputPassword = document.getElementById('input-password');
    const passwordFild = inputPassword.value;
    const userEmail = 'taposhpaul@gmail.com';
    const userPassword = 'taposhpaul';
    // checked Email and password in login 
    if (emamiFild == userEmail && passwordFild == userPassword) {
        window.location.href = 'banking.html';
    }

})