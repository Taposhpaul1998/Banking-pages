// deposite button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositFild = document.getElementById('deposit-amaount');
    const depositFildAmaount = depositFild.value;
    const depositAmaount = parseFloat(depositFildAmaount);
    // totle deposit 
    const depositTotle = document.getElementById('totleDeposite');
    const depositTotleAmaount = depositTotle.innerText;
    const carentDepositAmaount = parseFloat(depositTotleAmaount);
    const totleCarentDepositAmaount = carentDepositAmaount + depositAmaount;
    depositTotle.innerText = totleCarentDepositAmaount;
    // clear input fild 
    depositFild.value = '';

    // totle balance
    const balanceTotle = document.getElementById('totleBalance');
    const carentBalanceTotle = balanceTotle.innerText;
    const carentBalance = parseFloat(carentBalanceTotle);
    const totleCarentBalance = carentBalance + totleCarentDepositAmaount;
    balanceTotle.innerText = totleCarentBalance;
})
// withdraw button event
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawFild = document.getElementById('Withdraw-amaount');
    const windowFildAmaount = withdrawFild.value;
    const windowAmaount = parseFloat(windowFildAmaount);
    // totle window 
    const windowTotle = document.getElementById('totleWithdraw');
    const windowTotleAmaount = windowTotle.innerText;
    const totleWithdrawAmaount = parseFloat(windowTotleAmaount);
    const window = totleWithdrawAmaount + windowAmaount;
    windowTotle.innerText = window;

    // clear input fild
    withdrawFild.value = '';


    // carent Balance
    const balanceTotle = document.getElementById('totleBalance');
    const carentBalanceTotle = balanceTotle.innerText;
    const carentBalance = parseFloat(carentBalanceTotle);
    const totleCarentBalance = carentBalance - window;
    balanceTotle.innerText = totleCarentBalance;
})